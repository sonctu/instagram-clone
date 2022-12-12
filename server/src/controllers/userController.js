import cloudinary from "../configs/cloudinary.js";
import User from "../models/User.js";

const userController = {
  getSearchUser: async (req, res) => {
    try {
      const users = await User.find({
        username: { $regex: req.query.username },
      })
        .limit(10)
        .select("avatar fullname username");
      if (!users) return res.status(400).json({ msg: "Not found" });
      return res.status(200).json({ msg: "Username", data: users });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id).select("-password");
      if (!user)
        return res.status(400).json({ msg: "This user is not exists" });
      return res.status(200).json({
        data: user,
        msg: "Get user success",
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  updateUser: async (req, res) => {
    try {
      const { avatar, fullname, username, website, story, mobile, gender } =
        req.body;
      const result = await cloudinary.uploader.upload(avatar, {
        folder: "instagram-clone/avatar",
        crop: "scale",
        width: 100,
      });
      const id = req.user.id;
      const updateUser = await User.findByIdAndUpdate(
        id,
        {
          fullname,
          username,
          website,
          story,
          mobile,
          gender,
          avatar: result.secure_url,
        },
        {
          new: true,
        }
      );
      return res.status(200).json({
        msg: "Update user success",
        data: updateUser,
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

export default userController;
