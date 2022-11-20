import authRoute from "./auth.js";
import userRoute from "./user.js";

const routes = (app) => {
  app.use("/v1/auth", authRoute);
  app.use("/v1/user", userRoute);
};

export default routes;
