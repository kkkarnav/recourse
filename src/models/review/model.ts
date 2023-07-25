import { mongoose } from "../../config/database";

interface review_interface extends mongoose.Document {
  timestamp: String;
  code: String;
  semester: String;
  course_id: mongoose.Schema.Types.ObjectId[];
  ratings: {
    engaging: number;
    interesting_material: number;
    grading: number;
    workload: number;
    attendance: number;
    TFs: number;
    holistic: number;
    compound_score: number;
  };
  review: String;
  verified: Boolean;
}

const review_schema = new mongoose.Schema(
  {
    timestamp: { type: String, default: "" },
    code: [{ type: String, default: "" }],
    semester: { type: String, default: "" },
    course_id: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Course", default: "" },
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
  },
  {
    collection: "reviews",
  }
);

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

export const Review = mongoose.model<review_interface>("Review", review_schema);
