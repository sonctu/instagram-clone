import authRoute from "./auth.js";

const routes = (app) => {
  app.use("/v1/auth", authRoute);
};

export default routes;
