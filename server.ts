import express from "express";
import { Mongoose } from "mongoose";
import dotenv from "dotenv";
import routes from "./routes";
dotenv.config();

const app = express();
app.use(express.json());

const mongoose = new Mongoose();
const uri = process.env.DB_CONNECTION;
mongoose.connect(
  uri,
  { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
  (err) => (err ? console.log(err) : console.log("connected to db"))
);

routes(app);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("app is listning on port: ", port));
