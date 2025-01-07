import mongoose from "mongoose";
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (err) {
    console.log(err);
    throw new Error("connection failed !");
  }
};
export default connect;
