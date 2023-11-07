import { Schema, model, models, Document } from "mongoose";

export interface ITag extends Document {
  name: string;
  description: string;
  questions: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
  createdAt: Date;
}

const TagSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  questions: [{ type: Schema.Types.ObjectId, ref: "Question" }], // Reference to the Question model
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }], // Reference to the User model
  createdAt: { type: Date, default: Date.now },
});

const Tag = models.Tag || model("Tag", TagSchema);

export default Tag;
