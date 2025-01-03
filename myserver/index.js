const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/routes");
const cookieParser = require("cookie-parser");
const { restrictToLoggedInUserOnly, checkAuth } = require("./middleware/auth");

const app = express();
const PORT = 3800;
const MongoURL = "mongodb://127.0.0.1:27017/TaskingUser";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose.connect(MongoURL).then(() => {
  console.log("mongodb connected");
}).catch((err) => {
  console.log(err);
});

app.use("/login", router);
app.use("/", restrictToLoggedInUserOnly, router);
app.use("/newTask", router);
app.use("/signin", router);
app.use("/:date", checkAuth, router);

app.listen(PORT, () => {
  console.log(`server started at port: ${PORT}`);
});
