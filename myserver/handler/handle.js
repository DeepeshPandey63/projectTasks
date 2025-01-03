const User = require("../models/user");
const Tasks = require("../models/task");
const { setUser, getUser } = require("../service/auth");

const handleUserLogIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ emailId: email, password: password });
  if (!user) {
    return res.send("user not found");
  }
  const token = setUser(user);
  res.cookie("uid", token);
};

const handleUserSignIn = async (req, res) => {
  const body = req.body;
  if (!body || !body.name || !body.emailId || !body.password || !body.gender) {
    return res.status(400).send("Abe poori cheeze de na !!!");
  }

  const result = await User.create({
    name: body.name,
    emailId: body.emailId,
    password: body.password,
    gender: body.gender,
  });

  return res.status(201).json(result);
};

const handleHomePage = async (req, res) => {
  try {
    const result = await Tasks.find({ createdBy: req.user._id });
    const mySet = new Set();
    result.forEach((task) => {
      mySet.add(task.taskDate);
    });
    return res.send(Array.from(mySet));
  } catch (err) {
    console.error(err);
    return res.status(500).send("An error occurred while fetching tasks.");
  }
};

const handleDate = async (req, res) => {
  const date = req.params.date;

  try {
    const user = await Tasks.find({ taskDate: date, createdBy: req.user._id });
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ message: "No task found for the given date" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const handleAddTask = async (req, res) => {
  const body = req.body;
  if (!body || !body.title || !body.date) {
    return res.status(400).send("Please provide all necessary details!");
  }

  const taskData = {
    taskDate: body.date,
    taskHeading: body.title,
    createdBy: req.user._id,
  };

  if (body.description) {
    taskData.taskDescription = body.description;
  }

  try {
    const result = await Tasks.create(taskData);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).send("An error occurred while creating the task.");
  }
};

module.exports = {
  handleUserLogIn,
  handleUserSignIn,
  handleHomePage,
  handleDate,
  handleAddTask,
};
