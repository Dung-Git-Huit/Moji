import User from "../models/User.js";
export const authMe = async (req, res) => {
  try {
    const user = req.user; //lấy từ authMiddleware
    return res.status(200).json({ user });
  } catch (error) {
    console.log("Lỗi khi gọi authMe", error);
    return res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const searchUserByUsername = async (req, res) => {
  try {
    const { username } = req.query;

    if (!username || username.trim() === "") {
      return res
        .status(400)
        .json({ message: "Cần cung cấp user trong query." });
    }

    const user = await User.findOne({ username }).select(
      "_id displayName username avatar",
    );

    return res.status(200).json({ user });
  } catch (error) {
    console.error("Lỗi xảy ra khi searchUserByUsername");
    return res.status(500).json({ message: "Lỗi hệ thống" });
  }
};
