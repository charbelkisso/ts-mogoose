import { Router, Request, Response } from "express";

export default Router().get("/", (req: Request, res: Response) => {
  res.send("user route");
});
