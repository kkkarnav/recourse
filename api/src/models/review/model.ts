import { mongoose } from "../../config/database";

interface review_interface extends mongoose.Document {
    timestamp: String;
    code: String;
    semester: String;
    ratings: {
        engaging: Number;
        interesting_material: Number;
        grading: Number;
        workload: Number;
        attendance: Number;
        TFs: Number;
        holistic: Number;
        compound_score: Number;
    };
    review: String;
}

const review_schema = new mongoose.Schema(
    {
        timestamp: { type: String, default: "" },
        code: [{ type: String, default: "" }],
        semester: { type: String, default: "" },
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
    },
    {
        collection: "reviews",
    }
);

export const Review = mongoose.model<review_interface>("Review", review_schema);
