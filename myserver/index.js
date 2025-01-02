const express=require("express");
const mongoose=require('mongoose');
const User=require('./models/user');

const app=express();
const PORT=3800;
const MongoURL="mongodb://127.0.0.1:27017/TaskingUser";
app.use(express.json());

mongoose.connect(MongoURL).then(()=>{console.log("mongodb connected")}).catch((err)=>{console.log(err)});


app.get("/",(req,res)=>{
    res.send("Hello World");
})


app.post('/signin', async (req, res) => { 
    try { 
        const user = new User(req.body);
        await user.save(); 
        res.status(201).send(user); 
    } catch (error) { 
        res.status(400).send(error); 
    } 
});








app.listen(PORT,()=>{
    console.log(`server started at port: ${PORT}`);
})






