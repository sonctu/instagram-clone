import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const authController = {
  generateToken: (user) => {
    const accessToken = jwt.sign(
      { id: user._id },
      process.env.ACCESS_TOKEN_KEY,
      {
        expiresIn: "1d",
      }
    );
    const refreshToken = jwt.sign(
      { id: user._id },
      process.env.REFRESH_TOKEN_KEY,
      {
        expiresIn: "30d",
      }
    );
    return { accessToken, refreshToken };
  },
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user)
        return res.status(400).json({ msg: "Wrong email or password" });

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword)
        return res.status(400).json({ msg: "Wrong email or password" });

      if (user && validPassword) {
        const { accessToken, refreshToken } =
          authController.generateToken(user);

        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          path: "/",
          sameSite: "strict",
          secure: false,
        });

        return res.status(200).json({
          msg: "Login successfully",
          accessToken,
          data: {
            ...user._doc,
            password: "",
          },
        });
      }
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  registerUser: async (req, res) => {
    try {
      const { email, fullname, username, password } = req.body;

      const userData = await User.findOne({ email });
      if (userData)
        return res.status(400).json({ msg: "This email already exists" });

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        email,
        fullname,
        username,
        password: hashedPassword,
      });

      const { accessToken, refreshToken } =
        authController.generateToken(newUser);

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        path: "/",
        sameSite: "strict",
        secure: false,
      });

      const user = await newUser.save();

      return res.status(200).json({
        msg: "Register successfully",
        accessToken,
        data: {
          ...user._doc,
          password: "",
        },
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  requestRefreshToken: (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken)
      return res.status(401).json({ msg: "Not authenticated" });

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_KEY,
      async (err, data) => {
        if (err) return res.status(401).json({ msg: err });

        const user = await User.findOne({ id: data.id });
        const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
          authController.generateToken(data);

        res.cookie("refreshToken", newRefreshToken, {
          httpOnly: true,
          path: "/",
          sameSite: "strict",
          secure: false,
        });
        return res.status(200).json({
          msg: "Refresh token success",
          accessToken: newAccessToken,
          data: {
            ...user._doc,
            password: "",
          },
        });
      }
    );
  },
  logoutUser: (req, res) => {
    res.clearCookie("refreshToken");
    return res.status(200).json({ msg: "Logout successfully" });
  },
};

export default authController;
