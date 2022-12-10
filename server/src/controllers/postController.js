import Post from "../models/Post.js";

const postController = {
  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.find({}).populate({
        path: "userId",
        select: "avatar fullname username",
      });

      return res.status(200).json({
        msg: "All posts",
        data: posts,
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  createNewPost: async (req, res) => {
    try {
      const { description, images } = req.body;
      const newPost = new Post({
        description,
        images,
        userId: req.user.id,
      });
      await newPost.save();
      return res.status(200).json({
        msg: "Create new post success",
        data: newPost,
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  updatePost: async (req, res) => {
    try {
      const { description, images } = req.body;
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        {
          description,
          images,
        },
        { new: true }
      );
      return res.status(200).json({
        msg: "Update post success",
        data: updatedPost,
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

export default postController;
