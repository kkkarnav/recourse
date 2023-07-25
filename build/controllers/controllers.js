"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../models/course/model");
const model_2 = require("../models/faculty/model");
const model_3 = require("../models/review/model");
const faculty_data = require("../faculty.json")["data"];
const course_data = require("../courses.json")["data"];
const review_data = require("../reviews.json")["data"];
// query the database with url parameters and return the matching documents
const getCourse = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    let queries = {};
    for (let query in request.query) {
        if ([
            "sample_size",
            "engaging",
            "interesting_material",
            "grading",
            "workload",
            "attendance",
            "tfs",
            "holistic",
            "compound_score",
        ].includes(query.toLowerCase())) {
            if (request.query[query] != null &&
                request.query[query] !== "" &&
                !isNaN(Number(request.query[query]))) {
                if (Number(request.query[query]) < 0) {
                    queries["ratings." + query] = {
                        $lt: -Number(request.query[query]) + 0.01,
                    };
                }
                else {
                    queries["ratings." + query] = {
                        $gt: Number(request.query[query]) - 0.01,
                    };
                }
            }
        }
        else if (["code"].includes(query.toLowerCase())) {
            queries["code"] = {
                $regex: request.query[query].toString().replace(/[\[\]\\]/g, ""),
                $options: "is",
            };
        }
        else if (["prof"].includes(query.toLowerCase())) {
            queries["$or"] = [
                {
                    "faculty.professors.name": {
                        $regex: request.query[query].toString().replace(/[\[\]\\]/g, ""),
                        $options: "is",
                    },
                },
                {
                    "faculty.professors.email": {
                        $regex: request.query[query].toString().replace(/[\[\]\\]/g, ""),
                        $options: "is",
                    },
                },
            ];
        }
        else if (["id"].includes(query.toLowerCase())) {
            queries["_id"] = request.query[query];
        }
        else {
            queries[query] = {
                $regex: request.query[query].toString().replace(/[\[\]\\]/g, ""),
                $options: "is",
            };
        }
    }
    // mongoose schema call
    const courses = yield model_1.Course.find(queries);
    // respond with course json
    return response.status(200).json({
        data: courses,
    });
});
const getProf = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    let queries = {};
    for (let query in request.query) {
        if ([
            "sample_size",
            "engaging",
            "interesting_material",
            "grading",
            "workload",
            "attendance",
            "tfs",
            "holistic",
            "compound_score",
        ].includes(query.toLowerCase())) {
            if (request.query[query] != null &&
                request.query[query] !== "" &&
                !isNaN(Number(request.query[query]))) {
                if (Number(request.query[query]) < 0) {
                    queries["ratings." + query] = {
                        $lt: -Number(request.query[query]) + 0.01,
                    };
                }
                else {
                    queries["ratings." + query] = {
                        $gt: Number(request.query[query]) - 0.01,
                    };
                }
            }
        }
        else if (["offered"].includes(query.toLowerCase())) {
            queries["$or"] = [
                {
                    "courses_offered.code": {
                        $regex: request.query[query].toString().replace(/[\[\]\\]/g, ""),
                        $options: "is",
                    },
                },
                {
                    "courses_offered.semester": {
                        $regex: request.query[query].toString().replace(/[\[\]\\]/g, ""),
                        $options: "is",
                    },
                },
            ];
        }
        else if (["id"].includes(query.toLowerCase())) {
            queries["_id"] = request.query[query];
        }
        else {
            queries[query] = {
                $regex: request.query[query].toString().replace(/[\[\]\\]/g, ""),
                $options: "is",
            };
        }
    }
    // mongoose schema call
    const profs = yield model_2.Prof.find(queries);
    // respond with course json
    return response.status(200).json({
        data: profs,
    });
});
const getReview = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    let queries = {};
    for (let query in request.query) {
        if ([
            "engaging",
            "interesting_material",
            "grading",
            "workload",
            "attendance",
            "tfs",
            "holistic",
            "compound_score",
        ].includes(query.toLowerCase())) {
            if (request.query[query] != null &&
                request.query[query] !== "" &&
                !isNaN(Number(request.query[query]))) {
                if (Number(request.query[query]) < 0) {
                    queries["ratings." + query] = {
                        $lt: -Number(request.query[query]) + 0.01,
                    };
                }
                else {
                    queries["ratings." + query] = {
                        $gt: Number(request.query[query]) - 0.01,
                    };
                }
            }
        }
        else if (["code"].includes(query.toLowerCase())) {
            queries["code"] = {
                $regex: request.query[query].toString().replace(/[\[\]\\]/g, ""),
                $options: "is",
            };
        }
        else if (["verified"].includes(query.toLowerCase())) {
            queries["verified"] =
                request.query[query].toString().toLowerCase() !== "false";
        }
        else if (["id"].includes(query.toLowerCase())) {
            queries["_id"] = request.query[query];
        }
        else if (["course_id"].includes(query.toLowerCase())) {
            queries["course_id"] = request.query[query];
        }
        else {
            queries[query] = {
                $regex: request.query[query].toString().replace(/[\[\]\\]/g, ""),
                $options: "is",
            };
        }
    }
    // mongoose schema call
    const reviews = yield model_3.Review.find(queries);
    // respond with course json
    return response.status(200).json({
        data: reviews,
    });
});
const mapIndexKey = (index) => {
    switch (index) {
        case 0:
            return "engaging";
        case 1:
            return "interesting_material";
        case 2:
            return "grading";
        case 3:
            return "workload";
        case 4:
            return "attendance";
        case 5:
            return "holistic";
        case 6:
            return "TFs";
        case 7:
            return "compound_score";
        default:
            return "compound_score";
    }
};
const updateCourse = (request, resonse, next) => __awaiter(void 0, void 0, void 0, function* () {
    // get all documents in the collection
    for (let course of yield model_1.Course.find({})) {
        for (let index = 0; index < 7; index++) {
            let metric_sum = 0;
            let metric_key = mapIndexKey(index);
            for (let review of yield model_3.Review.find({ course_id: course._id })) {
                const review_ratings = review.ratings;
                metric_sum += review_ratings[metric_key];
            }
            course.ratings[metric_key] = parseFloat((metric_sum / course.reviews.length).toFixed(2));
        }
        course.ratings["sample_size"] = course.reviews.length;
        // remove field from document
        /*course.set("faculty.professors.name", undefined, {strict: false});
            course.save(function (err, course) {
                if (err) return console.error(err);
                console.log(course._id + " updated in db.");
            });*/
        // check if existing document entry exists which is up to date
        let entryAlreadyExists = yield model_1.Course.findOne({
            _id: course._id,
            ratings: course.ratings,
        });
        // if it isn't, update the db document with the new data
        if (!entryAlreadyExists) {
            course.save(function (err, course) {
                if (err)
                    return console.error(err);
                console.log(course._id + " saved in db.");
            });
            /*Course.findOneAndUpdate({_id: course._id}, course, {}, function (err, course) {
                      if (err) return console.error(err);
                      console.log(course?._id + " updated in db.");
                  });*/
        }
    }
});
const updateFaculty = (request, resonse, next) => __awaiter(void 0, void 0, void 0, function* () {
    // get all documents in the collection
    for (let prof of yield model_2.Prof.find({})) {
        for (let index = 0; index < 7; index++) {
            let metric_sum = 0;
            let metric_key = mapIndexKey(index);
            let sample_size = 0;
            let reviews = [];
            for (let course of prof.courses_offered) {
                let full_course = yield model_1.Course.findOne({
                    code: course.code,
                    semester: course.semester,
                });
                for (let review of yield model_3.Review.find({ course_id: full_course._id })) {
                    if (!reviews.includes(review._id)) {
                        reviews += review._id;
                        const review_ratings = review.ratings;
                        metric_sum += review_ratings[metric_key];
                        sample_size += 1;
                    }
                }
                prof.ratings["sample_size"] = sample_size;
            }
            if (sample_size > 0) {
                prof.ratings[metric_key] = parseFloat((metric_sum / sample_size).toFixed(2));
            }
            else {
                prof.ratings[metric_key] = 0;
            }
        }
        // remove field from document
        /*course.set("faculty.professors.name", undefined, {strict: false});
            course.save(function (err, course) {
                if (err) return console.error(err);
                console.log(course._id + " updated in db.");
            });*/
        // check if existing document entry exists which is up to date
        let entryAlreadyExists = yield model_1.Course.findOne({
            _id: prof._id,
            ratings: prof.ratings,
        });
        // if it isn't, update the db document with the new data
        if (!entryAlreadyExists) {
            prof.save(function (err, course) {
                if (err)
                    return console.error(err);
                console.log(course._id + " saved in db.");
            });
            /*Course.findOneAndUpdate({_id: course._id}, course, {}, function (err, course) {
                      if (err) return console.error(err);
                      console.log(course?._id + " updated in db.");
                  });*/
        }
    }
});
const updateReview = (request, resonse, next) => __awaiter(void 0, void 0, void 0, function* () {
    // get all documents in the collection
    for (let review of yield model_3.Review.find({})) {
        // key value pair for the field that you want to add to this document
        let field_key = "course_id";
        let field_value = [];
        const found_courses = yield model_1.Course.find({
            $or: [
                {
                    code: {
                        $regex: review.code.toString().replace(/[\[\]\\]/g, ""),
                        $options: "is",
                    },
                },
                {
                    code: {
                        $in: review.code,
                    },
                },
            ],
            semester: review.semester,
        });
        for (let found_course of found_courses) {
            field_value.push(found_course.id);
        }
        // add field to document
        review[field_key] = field_value;
        // check if existing document entry exists which is up to date
        let entryAlreadyExists = yield model_3.Review.findOne({
            timestamp: review.timestamp,
            code: review.code,
            [field_key]: field_value,
        });
        // if it isn't, update the db document with the new data
        if (!entryAlreadyExists) {
            model_3.Review.findOneAndUpdate({ _id: review._id }, review, {}, function (err, review) {
                if (err)
                    return console.error(err);
                console.log((review === null || review === void 0 ? void 0 : review.timestamp) + " updated in db.");
            });
        }
    }
});
//__________________________________________________
// development functions to make entries to database
const addCourse = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    for (let course of course_data) {
        // a document instance
        let course_entry = new model_1.Course({
            name: course.name,
            code: course.code,
            department: course.department,
            semester: course.semester,
            faculty: course.faculty,
            document: course.document,
            html_details: course.html_details,
            ratings: course.ratings,
        });
        const entryAlreadyExists = yield model_1.Course.exists({
            code: course_entry.code,
            semester: course_entry.semester,
        });
        if (!entryAlreadyExists) {
            // save model to database
            course_entry.save(function (err, course) {
                if (err)
                    return console.error(err);
                console.log(course.name + " saved to db.");
            });
        }
    }
});
const addProf = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    for (let prof of faculty_data) {
        let queries = {};
        queries["$or"] = [
            {
                "faculty.professors.name": {
                    $regex: prof.name.toString().replace(/[\[\]\\]/g, ""),
                    $options: "is",
                },
            },
            {
                "faculty.professors.email": {
                    $regex: prof.email.toString().replace(/[\[\]\\]/g, ""),
                    $options: "is",
                },
            },
        ];
        // a document instance
        let prof_entry = new model_2.Prof({
            name: prof.name,
            position: prof.position,
            qualification: prof.qualification,
            profile_link: prof.link,
            profile_image: prof.image,
            department: prof.department,
            email: prof.email,
            courses_offered: yield model_1.Course.find(queries),
        });
        const entryAlreadyExists = yield model_2.Prof.exists({
            name: prof_entry.name,
            email: prof_entry.email,
        });
        if (!entryAlreadyExists) {
            // save model to database
            prof_entry.save(function (err, prof) {
                if (err)
                    return console.error(err);
                console.log(prof.name + " saved to db.");
            });
        }
    }
});
const addReview = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    for (let review of review_data) {
        for (let rating of Object.keys(review.ratings)) {
            if (review.ratings[rating] == "") {
                review.ratings[rating] = 3;
            }
        }
        // a document instance
        let review_entry = new model_3.Review({
            timestamp: review.timestamp,
            code: review.code,
            semester: review.semester,
            ratings: review.ratings,
            review: review.review,
            verified: review.verified,
        });
        const entryAlreadyExists = yield model_3.Review.exists({
            timestamp: review_entry.timestamp,
            code: review_entry.code,
        });
        if (!entryAlreadyExists) {
            // save model to database
            review_entry.save(function (err, review) {
                if (err)
                    return console.error(err);
                console.log(review.timestamp + " saved to db.");
            });
        }
    }
});
exports.default = {
    getCourse,
    getProf,
    getReview,
    addCourse,
    addProf,
    addReview,
    updateCourse,
    updateFaculty,
    updateReview,
};
