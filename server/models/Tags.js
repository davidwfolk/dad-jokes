
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Tag = new Schema(
  {
    tagTitle: { type: String, required: true },
  },
);

export default Tag;