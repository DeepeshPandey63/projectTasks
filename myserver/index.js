const express=require("express");
const mongoose=require('mongoose');
const User=require('./models/user');
const Tasks=require("./models/task");

const app=express();
const PORT=3800;
const MongoURL="mongodb://127.0.0.1:27017/TaskingUser";
app.use(express.json());
app.use(express.urlencoded({extended:false}));

mongoose.connect(MongoURL).then(()=>{console.log("mongodb connected")}).catch((err)=>{console.log(err)});




app.get("/login",async(req,res)=>{
    const {email,password}=req.body;
    const user=User.findOne({emailId:email,password:password})
    if(!user)
    {
        return res.send("user not found");
    }
    return res.send("user found");

})




app.get("/", async (req, res) => { 
    try { 
        const result = await Tasks.find({}); 
        const mySet = new Set(); 
        result.forEach((task) => { 
            mySet.add(task.taskDate); 
        }); 
        return res.send(Array.from(mySet)); 
 } 
 catch (err) 
 { console.error(err); 
    return res.status(500).send('An error occurred while fetching tasks.'); 
} 
});



app.post("/newTask", async (req, res) => {
    const body = req.body;
    if (!body || !body.title || !body.date) {
        return res.status(400).send("Please provide all necessary details!");
    }

    const taskData = {
        taskDate: body.date,
        taskHeading: body.title,
        // createdBy:req.user._id
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
});



app.post('/signin', async (req, res) => { 
    const body=req.body;
    if(
        !body||
        !body.name||
        !body.emailId||
        !body.password||
        !body.gender
    )
    {
        return res.status(400).send("Abe poori cheeze de na !!!");
    }

    const result=await User.create({
        name:body.name,
        emailId:body.emailId,
        password:body.password,
        gender:body.gender,

    });

    return res.status(201).json(result);
});
 





app.get('/:date', async (req, res) => {
    console.log(req.params);
    const date = req.params.date;

    try {
        const user = await Tasks.find({ taskDate: date });
        if (user) {
            return res.status(200).json(user);
        } else {
            return res.status(404).json({ message: 'No task found for the given date' });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});










app.listen(PORT,()=>{
    console.log(`server started at port: ${PORT}`);
})
