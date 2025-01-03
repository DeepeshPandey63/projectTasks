const jwt = require("jsonwebtoken");
const secret = "priya@420";

function setUser(user) {
  return jwt.sign({ id: user._id, email: user.emailID }, secret);
}

function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};