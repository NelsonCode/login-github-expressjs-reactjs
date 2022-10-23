import express from "express";
import passport from "passport";
import { loginRouter } from "./routes/github.js";
import "./middlewares/github.js";

const app = express();

app.use(passport.initialize()); 

app.use("/auth", loginRouter);

app.listen(3000, () => console.log(`server in http://localhost:3000`));
