const { setUser, getUser } = require("../service/auth");

async function restrictToLoggedInUserOnly(req, res, next) {
  const token = req.cookies?.uid;
  if (!token) return res.status(401).send("Unauthorized");
  const user = getUser(token);
  if (!user) return res.status(401).send("Unauthorized");
  req.user = user;
  next();
}

async function checkAuth(req, res, next) {
  const token = req.cookies?.uid;
  const user = getUser(token);
  req.user = user;
  next();
}

module.exports = {
  restrictToLoggedInUserOnly,
  checkAuth,
};
