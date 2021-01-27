import { Response, Request, Application } from "express";
import userRoute from "./userRoute";
export default (app: Application): void => {
  app.get("/", (req: Request, res: Response) => {
    res.send("home route");
  });
  app.use("/users", userRoute);
};
