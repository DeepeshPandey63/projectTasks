const jwt=require('jsonwebtoken');
const secret="priya@420"
function setUser(user){
    return jwt.sign(user,secret);
}