/** @format */

import express from "express";
import { signIn } from "./routes/auth/sign-in";
import bodyParser from "body-parser";
import { signUp } from "./routes/auth/sign-up";
import mongoose from "mongoose";

const app = express();
const dbURI =
  "mongodb+srv://Talha:Talha%40456@Cluster0.xqvmh.mongodb.net/mopaints?retryWrites=true&w=majority&ssl=true";
mongoose
  .connect(dbURI)
  .then((result) => {
    console.log("connected to db");
    var jsonParser = bodyParser.json();
    app.use(jsonParser);
    const port = 3000;
    signIn(app);
    signUp(app);
    app.get("/", (req: any, res: any) => {
      res.send("Hello World!");
    });

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
