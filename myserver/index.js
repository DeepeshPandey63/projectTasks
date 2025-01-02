const express=require("express");
const mongoose=require('mongoose');
const User=require('./models/user');

const app=express();
const PORT=3800;
const MongoURL="mongodb://127.0.0.1:27017/TaskingUser";
app.use(express.json());
app.use(express.urlencoded({extended:false}));

mongoose.connect(MongoURL).then(()=>{console.log("mongodb connected")}).catch((err)=>{console.log(err)});


app.get("/",(req,res)=>{
    res.send("Hello World");
})


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
 







app.listen(PORT,()=>{
    console.log(`server started at port: ${PORT}`);
})
