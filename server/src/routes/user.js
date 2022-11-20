import express from "express";
import userController from "../controllers/userController.js";
import middlewareController from "../middlewares/middlewareController.js";

const router = express.Router();

router.get(
  "/search",
  middlewareController.verifyToken,
  userController.getSearchUser
);

export default router;
