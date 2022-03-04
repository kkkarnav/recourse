import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";
import mongoose from "mongoose";
import { Course } from "../models/course/model";
import { Prof } from "../models/faculty/model";

const faculty_data = require("../faculty.json")["professors"];
const course_data = require("../courses.json")["data"];

const getCourse = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    let queries: any = {};
    for (let query in request.query) {
        if (
            [
                "sample_size",
                "engaging",
                "interesting_material",
                "grading",
                "workload",
                "attendance",
                "tfs",
                "holistic",
                "compound_score",
            ].includes(query.toLowerCase())
        ) {
            if (typeof request.query[query] === "number") {
                queries["ratings." + query] = request.query[query];
            }
        } else if (["code"].includes(query.toLowerCase())) {
            queries["code"] = {
                $regex: request.query[query]!.toString().replace(
                    /[\[\]\\]/g,
                    ""
                ),
                $options: "is",
            };
        } else if (["prof"].includes(query.toLowerCase())) {
            queries["$or"] = [
                {
                    "faculty.professors.name": {
                        $regex: request.query[query]!.toString().replace(
                            /[\[\]\\]/g,
                            ""
                        ),
                        $options: "is",
                    },
                },
                {
                    "faculty.professors.email": {
                        $regex: request.query[query]!.toString().replace(
                            /[\[\]\\]/g,
                            ""
                        ),
                        $options: "is",
                    },
                },
            ];
        } else {
            queries[query] = {
                $regex: request.query[query]!.toString().replace(
                    /[\[\]\\]/g,
                    ""
                ),
                $options: "is",
            };
        }
    }

    // mongoose schema call
    const course = await Course.find(queries);

    // respond with course json
    return response.status(200).json({
        data: course,
    });
};

const addCourse = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    for (let course of course_data.slice(0, 7)) {
        // a document instance
        let course_entry = new Course({
            name: course.name,
            code: course.code,
            department: course.department,
            semester: course.semester,
            faculty: course.faculty,
            document: course.document,
            html_details: course.html_details,
            ratings: course.ratings,
        });

        const entryAlreadyExists = await Course.exists({
            code: course_entry.code,
            semester: course_entry.semester,
            "faculty.professors[0].name":
                "course_entry.faculty.professors[0].name",
        });

        if (!entryAlreadyExists) {
            // save model to database
            course_entry.save(function (err, course) {
                if (err) return console.error(err);
                console.log(course.name + " saved to db.");
            });
        }
    }
};

const getProf = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    let queries: any = {};
    for (let query in request.query) {
        queries[query] = { $regex: request.query[query], $options: "is" };
    }

    // mongoose schema call
    const prof = await Prof.find(queries);

    // respond with course json
    return response.status(200).json({
        data: prof,
    });
};

const addProf = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    for (let prof of faculty_data) {
        // a document instance
        let prof_entry = new Prof({
            name: prof.name,
            position: prof.position,
            qualification: prof.qualification,
            profile_link: prof.link,
            profile_image: prof.image,
            department: prof.department,
            email: prof.email,
        });

        const entryAlreadyExists = await Prof.exists({ name: prof_entry.name });

        if (!entryAlreadyExists) {
            // save model to database
            prof_entry.save(function (err, prof) {
                if (err) return console.error(err);
                console.log(prof.name + " saved to db.");
            });
        }
    }
};

export default { getCourse, addCourse, getProf, addProf };
