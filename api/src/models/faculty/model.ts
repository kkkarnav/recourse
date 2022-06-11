import { mongoose } from "../../config/database";

interface faculty_interface extends mongoose.Document {
    name: String;
    position: String;
    qualification: String;
    profile_link: String;
    profile_image: String;
    department: String;
    email: String;
    courses_offered: {
        code: String;
        semester: String;
    }[];
    ratings: {
        sample_size: number;
        engaging: number;
        interesting_material: number;
        grading: number;
        workload: number;
        attendance: number;
        TFs: number;
        holistic: number;
        compound_score: number;
    };
}

const faculty_schema = new mongoose.Schema(
    {
        name: { type: String, default: "" },
        position: { type: String, default: "" },
        qualification: { type: String, default: "" },
        profile_link: { type: String, default: "#" },
        profile_image: { type: String, default: "#" },
        department: { type: String, default: "" },
        email: { type: String, default: "" },
        courses_offered: [{
                    code: [{ type: String, default: "" }],
                    semester: { type: String, default: "" },
                }],
        ratings: {
            sample_size: { type: Number, default: 0 },
            engaging: { type: Number, default: 0 },
            interesting_material: { type: Number, default: 0 },
            grading: { type: Number, default: 0 },
            workload: { type: Number, default: 0 },
            attendance: { type: Number, default: 0 },
            TFs: { type: Number, default: 0 },
            holistic: { type: Number, default: 0 },
            compound_score: { type: Number, default: 0 },
        },
    },
    {
        collection: "faculty",
    }
);

faculty_schema.pre('save', function(next) {
    this.ratings.compound_score = ((this.ratings.engaging.valueOf() + this.ratings.interesting_material.valueOf() + this.ratings.grading.valueOf() + this.ratings.workload.valueOf() + this.ratings.attendance.valueOf() + (0.5 * this.ratings.TFs.valueOf()) + (2 * this.ratings.holistic.valueOf())) / 7.5);
    next();
});

export const Prof = mongoose.model<faculty_interface>("Prof", faculty_schema);
