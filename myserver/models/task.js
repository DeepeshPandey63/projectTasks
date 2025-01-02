const mongoose=require('mongoose');
const User = require('./user');

const taskSchema=new mongoose.Schema({
    taskDate:
    {
        type:Number,
        required:true
    },
    taskHeading:
    {
        type:"string",
        required:true,
    },
    taskDescription:
    {
        type:"string"
    },
    // createdBy:
    // {
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"users"
    // }
})

const Tasks=mongoose.model("tasks",taskSchema);
module.exports =Tasks;