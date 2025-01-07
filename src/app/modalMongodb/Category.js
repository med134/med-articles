import mongoose from "mongoose";
const { Schema } = mongoose;
const categorySchema = new Schema(
  {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      require: true,
    },
    slug: {
      type: Number,
      require: false,
    },
  },
  { timestamps: true }
);
const Category =
  mongoose.models.category || mongoose.model("category", categorySchema);
export default Category;
