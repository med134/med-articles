import mongoose from "mongoose";
const { Schema } = mongoose;
const likesSchema = new Schema(
  {
    blogId: {
      type: String,
      required: true,
    },
    numberOfLikes: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const Likes = mongoose.models.likes || mongoose.model("likes", likesSchema);
export default Likes;
