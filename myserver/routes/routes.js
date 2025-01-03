const express = require("express");
const router = express.Router();
const { handleUserLogIn, handleUserSignIn, handleHomePage, handleDate, handleAddTask } = require("../handler/handle");

router.post("/login", handleUserLogIn);
router.get("/", handleHomePage);
router.post("/newTask", handleAddTask);
router.post("/signin", handleUserSignIn);
router.get("/:date", handleDate);

module.exports = router;
