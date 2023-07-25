"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
const database_1 = require("../../config/database");
const review_schema = new database_1.mongoose.Schema({
    timestamp: { type: String, default: "" },
    code: [{ type: String, default: "" }],
    semester: { type: String, default: "" },
    course_id: [
        { type: database_1.mongoose.Schema.Types.ObjectId, ref: "Course", default: "" },
    ],
    ratings: {
        engaging: { type: Number, default: 0 },
        interesting_material: { type: Number, default: 0 },
        grading: { type: Number, default: 0 },
        workload: { type: Number, default: 0 },
        attendance: { type: Number, default: 0 },
        TFs: { type: Number, default: 0 },
        holistic: { type: Number, default: 0 },
        compound_score: { type: Number, default: 0 },
    },
    review: { type: String, default: "" },
    verified: { type: Boolean, default: false },
}, {
    collection: "reviews",
});
review_schema.pre("save", function (next) {
    if (this.ratings) {
        this.ratings.compound_score =
            (this.ratings.engaging.valueOf() +
                this.ratings.interesting_material.valueOf() +
                this.ratings.grading.valueOf() +
                this.ratings.workload.valueOf() +
                this.ratings.attendance.valueOf() +
                0.5 * this.ratings.TFs.valueOf() +
                2 * this.ratings.holistic.valueOf()) /
                7.5;
    }
    next();
});
exports.Review = database_1.mongoose.model("Review", review_schema);
