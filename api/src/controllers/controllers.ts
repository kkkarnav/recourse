import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";
import mongoose from "mongoose";
import { Course } from "../models/course/model";
import { Prof } from "../models/faculty/model";
import { Review } from "../models/review/model";

const faculty_data = require("../faculty.json")["data"];
const course_data = require("../courses.json")["data"];
const review_data = require("../reviews.json")["data"];

// query the database with url parameters and return the matching documents
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
			if (
				request.query[query] != null &&
				request.query[query] !== "" &&
				!isNaN(Number(request.query[query]))
			) {
				if (Number(request.query[query]) < 0) {
					queries["ratings." + query] = {
						$lt: Number(request.query[query]) + 0.01,
					};
				} else {
					queries["ratings." + query] = {
						$gt: Number(request.query[query]) - 0.01,
					};
				}
			}
		} else if (["code"].includes(query.toLowerCase())) {
			queries["code"] = {
				$regex: request.query[query]!.toString().replace(/[\[\]\\]/g, ""),
				$options: "is",
			};
		} else if (["prof"].includes(query.toLowerCase())) {
			queries["$or"] = [
				{
					"faculty.professors.name": {
						$regex: request.query[query]!.toString().replace(/[\[\]\\]/g, ""),
						$options: "is",
					},
				},
				{
					"faculty.professors.email": {
						$regex: request.query[query]!.toString().replace(/[\[\]\\]/g, ""),
						$options: "is",
					},
				},
			];
		} else {
			queries[query] = {
				$regex: request.query[query]!.toString().replace(/[\[\]\\]/g, ""),
				$options: "is",
			};
		}
	}

	// mongoose schema call
	const courses = await Course.find(queries);

	// respond with course json
	return response.status(200).json({
		data: courses,
	});
};

const getProf = async (
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
			if (
				request.query[query] != null &&
				request.query[query] !== "" &&
				!isNaN(Number(request.query[query]))
			) {
				if (Number(request.query[query]) < 0) {
					queries["ratings." + query] = {
						$lt: Number(request.query[query]) + 0.01,
					};
				} else {
					queries["ratings." + query] = {
						$gt: Number(request.query[query]) - 0.01,
					};
				}
			}
		} else {
			queries[query] = {
				$regex: request.query[query]!.toString().replace(/[\[\]\\]/g, ""),
				$options: "is",
			};
		}
	}

	// mongoose schema call
	const profs = await Prof.find(queries);

	// respond with course json
	return response.status(200).json({
		data: profs,
	});
};

const getReview = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    let queries: any = {};
    for (let query in request.query) {
        if (
            [
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
            if (
                request.query[query] != null &&
                request.query[query] !== "" &&
                !isNaN(Number(request.query[query]))
            ) {
                if (Number(request.query[query]) < 0) {
                    queries["ratings." + query] = {
                        $lt: Number(request.query[query]) + 0.01,
                    };
                } else {
                    queries["ratings." + query] = {
                        $gt: Number(request.query[query]) - 0.01,
                    };
                }
            }
        } else if (["code"].includes(query.toLowerCase())) {
            queries["code"] = {
                $regex: request.query[query]!.toString().replace(/[\[\]\\]/g, ""),
                $options: "is",
            };
        } else if (["verified"].includes(query.toLowerCase())) {
            queries["verified"] = (request.query[query] !== "false");
        } else {
            queries[query] = {
                $regex: request.query[query]!.toString().replace(/[\[\]\\]/g, ""),
                $options: "is",
            };
        }
    }

    // mongoose schema call
    const reviews = await Review.find(queries);

    // respond with course json
    return response.status(200).json({
        data: reviews,
    });
};

const updateCourse = async (
    request: Request,
    resonse: Response,
    next: NextFunction
) => {

    // get all documents in the collection
    for (let course of await Course.find({}) ) {

        // key value pair for the field that you want to add to this document
        let field_key: keyof typeof course = "reviews";

        let field_value: mongoose.Schema.Types.ObjectId[] = [];
        const found_reviews = await Review.find({ course_id: course._id });
        for (let found_review of found_reviews) {
            field_value.push(found_review!.id);
        }

        // add field to document
        course[field_key] = field_value;

        // check if existing document entry exists which is up to date
        let entryAlreadyExists = await Course.findOne({
            semester: course.semester,
            code: course.code,
            [field_key]: field_value,
        });

        // if it isn't, update the db document with the new data
        if (!entryAlreadyExists) {
            Course.findOneAndUpdate({_id: course._id}, course, {}, function (err, course) {
                if (err) return console.error(err);
                console.log(course?._id + " updated in db.");
            });
        }
    }
};

const updateReview = async (
    request: Request,
    resonse: Response,
    next: NextFunction
) => {

    // get all documents in the collection
    for (let review of await Review.find({}) ) {

        // key value pair for the field that you want to add to this document
        let field_key: keyof typeof review = "course_id";
        
        let field_value: mongoose.Schema.Types.ObjectId[] = [];
        const found_courses = await Course.find({
            $or: [
                {
                    code: {
                        $regex: review.code!.toString().replace(/[\[\]\\]/g, ""),
                        $options: "is",
                    }
                },
                {
                    code: {
                        $in: review.code,
                    }
                }
            ],
            semester: review.semester
        });

        for (let found_course of found_courses) {
            field_value.push(found_course!.id);
        }

        // add field to document
        review[field_key] = field_value;

        // check if existing document entry exists which is up to date
        let entryAlreadyExists = await Review.findOne({
            timestamp: review.timestamp,
            code: review.code,
            [field_key]: field_value,
        });

        // if it isn't, update the db document with the new data
        if (!entryAlreadyExists) {
            Review.findOneAndUpdate({_id: review._id}, review, {}, function (err, review) {
                if (err) return console.error(err);
                console.log(review?.timestamp + " updated in db.");
            });
        }
    }
};

//__________________________________________________
// development functions to make entries to database
const addCourse = async (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	for (let course of course_data) {
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

const addProf = async (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	for (let prof of faculty_data) {

        let queries: any = {};
        queries["$or"] = [
                {
                    "faculty.professors.name": {
                        $regex: prof.name!.toString().replace(/[\[\]\\]/g, ""),
                        $options: "is",
                    },
                },
                {
                    "faculty.professors.email": {
                        $regex: prof.email!.toString().replace(/[\[\]\\]/g, ""),
                        $options: "is",
                    },
                },
            ];

		// a document instance
		let prof_entry = new Prof({
			name: prof.name,
			position: prof.position,
			qualification: prof.qualification,
			profile_link: prof.link,
			profile_image: prof.image,
			department: prof.department,
			email: prof.email,
            courses_offered: await Course.find(queries),
		});

		const entryAlreadyExists = await Prof.exists({
			name: prof_entry.name,
			email: prof_entry.email,
		});

		if (!entryAlreadyExists) {
			// save model to database
			prof_entry.save(function (err, prof) {
				if (err) return console.error(err);
				console.log(prof.name + " saved to db.");
			});
		};
	}
};

const addReview = async (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	for (let review of review_data) {

        for (let rating of Object.keys(review.ratings)) {
            if (review.ratings[rating as keyof typeof review.ratings] == "") {
                review.ratings[rating as keyof typeof review.ratings] = 3;
            }
        }

		// a document instance
		let review_entry = new Review({
			timestamp: review.timestamp,
			code: review.code,
			semester: review.semester,
			ratings: review.ratings,
			review: review.review,
			verified: review.verified,
		});

		const entryAlreadyExists = await Review.exists({
			timestamp: review_entry.timestamp,
			code: review_entry.code,
		});

		if (!entryAlreadyExists) {

			// save model to database
			review_entry.save(function (err, review) {
				if (err) return console.error(err);
				console.log(review.timestamp + " saved to db.");
			});
		}
	}
};

export default {
	getCourse,
    getProf,
    getReview,
	addCourse,
	addProf,
	addReview,
    updateCourse,
    updateReview,
};
