import mongoose from "mongoose";
const { Schema } = mongoose;
const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tags: {
      type: [String], // array of strings
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    job: {
      type: String,
    },
    status: {
      type: String,
      default: "draft",
    },
    content: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
    },
    email: {
      type: String,
    },
    userImage: {
      type: String,
    },
  },
  { timestamps: true }
);
const Article =
  mongoose.models.articles || mongoose.model("articles", articleSchema);
export default Article;
