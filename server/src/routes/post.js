import express from "express";
import postController from "../controllers/postController.js";
import middlewareController from "../middlewares/middlewareController.js";

const router = express.Router();

//get posts
router.get("/", middlewareController.verifyToken, postController.getAllPosts);

//create new post
router.post(
  "/",
  middlewareController.verifyToken,
  postController.createNewPost
);

//update post
router.put("/:id", middlewareController.verifyToken, postController.updatePost);

export default router;
