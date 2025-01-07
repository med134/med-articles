import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: /.+\@.+\..+/,
    },
    password: {
      type: String,
      required: false,
    },
    imageUrl: {
      type: String,
      default:
        "https://res.cloudinary.com/djcnq7nmj/image/upload/v1730411682/profile_qjehzj.png",
      required: false,
    },
    job: {
      type: String,
      required: false,
    },
    homeAddress: {
      type: String,
      required: false,
    },
    about: {
      type: String,
      required: false,
    },
    youtubeUrl: {
      type: String,
      required: false,
      default: "#",
    },
    githubUrl: {
      type: String,
      required: false,
      default: "#",
    },
    linkedInUrl: {
      type: String,
      required: false,
      default: "#",
    },
    dribbleUrl: {
      type: String,
      required: false,
      default: "#",
    },
    instagramUrl: {
      type: String,
      required: false,
      default: "#",
    },
    twitterUrl: {
      type: String,
      required: false,
      default: "#",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

//If the User collection does not exist create a new one.
const User = mongoose.models?.users || mongoose.model("users", userSchema);
export default User;
