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
      const {
        avatar,
        fullname,
        username,
        website,
        story,
        mobile,
        gender,
        fileAvatar,
      } = req.body;
      let result;
      if (fileAvatar) {
        result = await cloudinary.uploader.upload(fileAvatar, {
          folder: "instagram-clone/avatar",
          crop: "scale",
          width: 100,
        });
      }
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
          avatar: fileAvatar ? result.secure_url : avatar,
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
  followUser: async (req, res) => {
    try {
      const currentUserId = req.user.id;
      const userId = req.params.id;

      const user = await User.findById(currentUserId);

      if (user.followings.includes(userId))
        return res.status(500).json({ msg: "You followed this user" });

      const updateUser = await User.findByIdAndUpdate(
        currentUserId,
        {
          $push: { followings: userId },
        },
        { new: true }
      );

      await User.findByIdAndUpdate(
        userId,
        {
          $push: { followers: currentUserId },
        },
        { new: true }
      );

      return res.status(200).json({
        msg: "Follow user",
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  unfollowUser: async (req, res) => {
    try {
      const currentUserId = req.user.id;
      const userId = req.params.id;

      const user = await User.findById(currentUserId);

      if (!user.followings.includes(userId))
        return res.status(500).json({
          msg: "You haven't followed this user",
        });

      const updateUser = await User.findByIdAndUpdate(
        currentUserId,
        {
          $pull: { followings: userId },
        },
        { new: true }
      );

      await User.findByIdAndUpdate(
        userId,
        {
          $pull: { followers: currentUserId },
        },
        { new: true }
      );

      return res.status(200).json({
        msg: "Unfollow user",
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

export default userController;
