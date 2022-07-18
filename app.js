const express = require("express");
const cors = require("cors");
// upload();
const globalErrorHandler = require("./controllers/errorCotroller");

const app = express();
app.use(cors());

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));
const userRouter = require("./routes/userRoutes");
const blogRouter = require("./routes/blogRoutes");
const eventRouter = require("./routes/eventRoutes");
const csRouter = require("./routes/clubServiceRoutes");

app.use("/api/v1/users", userRouter);
app.use("/api/v1/blogs", blogRouter);
app.use("/api/v1/events", eventRouter);

app.use("/ping", (req, res, next) => {
  res.send("Helo World !");
});

app.use(globalErrorHandler);

module.exports = app;
// http://localhost:3000/api/v1/blogs/62cfcd969c828fea45257607/upload
