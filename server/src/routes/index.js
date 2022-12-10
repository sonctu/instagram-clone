import authRoute from "./auth.js";
import userRoute from "./user.js";
import postRoute from "./post.js";

const routes = (app) => {
  app.use("/v1/auth", authRoute);
  app.use("/v1/user", userRoute);
  app.use("/v1/post", postRoute);
};

export default routes;
