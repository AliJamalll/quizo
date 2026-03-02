const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(morgan("dev"));

app.use(express.json()); ///using middeleware

app.use("/api/v1/users", userRouter);
//aspdkltwltk

module.exports = app;
