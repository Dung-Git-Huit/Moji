import mongoose from "mongoose";

const userSChema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    hashedPassword: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    displayName: {
      type: String,
      required: true,
      trim: true,
    },
    avatarUrl: {
      type: String, //link CDN để hiển thị hình
    },
    avatarId: {
      type: String, //cloudinary public_id để xóa ảnh
    },
    bio: {
      type: String,
      maxlength: 500,
    },
    phone: {
      type: String,
      sparse: true, //cho phép null,nhưng ko được trùng lặp
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", userSChema);

export default User;
