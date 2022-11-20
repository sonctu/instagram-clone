import User from "../models/User.js";

const userController = {
  getSearchUser: async (req, res) => {
    try {
      if (req.query.username) {
        const users = await User.find({
          username: { $regex: req.query.username },
        })
          .limit(10)
          .select("avatar fullname username");
        return res.status(200).json({ msg: "Username", data: users });
      }
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

export default userController;
