import mongoose from "mongoose";
const { Schema } = mongoose;
const commentsSchema = new Schema(
  {
    blogId: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    imageUser: {
      type: String,
      required: false,
    },
    comment: {
      type: String,
      require: true,
    },
    replies: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comments",
        require: false,
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
const Comments =
  mongoose.models.comments || mongoose.model("comments", commentsSchema);
export default Comments;
