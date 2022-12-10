import express from "express";
import userController from "../controllers/userController.js";
import middlewareController from "../middlewares/middlewareController.js";

const router = express.Router();

// Search user
router.get(
  "/search",
  middlewareController.verifyToken,
  userController.getSearchUser
);

// Get user
router.get("/:id", middlewareController.verifyToken, userController.getUser);

//Update current user
router.put("/", middlewareController.verifyToken, userController.updateUser);

export default router;
