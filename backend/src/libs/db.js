import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);
    console.log("kết nối  csdl thành công !");
  } catch (err) {
    console.error("Lỗi kết nối csdl:", err);
    process.exit(1);
  }
};
