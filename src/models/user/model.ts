import { mongoose } from "../../config/database";

interface user_interface extends mongoose.Document {
  google_id: String;
  name: string;
}

const user_schema = new mongoose.Schema(
  {
    google_id: { type: String, default: "" },
    name: { type: String, default: "" },
  },
  {
    collection: "users",
  }
);

user_schema.set("toObject", {
  virtuals: true,
  transform: (doc, ret, options) => {
    delete ret.__v;
    ret.id = ret._id.toString();
    delete ret._id;
  },
});

export const User = mongoose.model<user_interface>("User", user_schema);
