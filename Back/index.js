const express=require('express');
const mongoose=require('./connnect/connect')
const model=require('./Model/usermodel')
const app=express()
const cors=require('cors')

app.use(express.json());

app.use(cors())



app.post('/register',async (req,res)=>{

    const {username,password}=req.body;

    const userdata=await model.findOne({ username:username });

    if (userdata) {
        res.status(400).json({
            status: 'Failed',
            message:'user already present'
        })
    } else {
        model.create(req.body)
        res.status(200).json({
            status:'success',
            message:'user registered'
        })
    }
    
})

app.post('/login',async (req,res)=>{

    const {username,password}=req.body

    const user= await model.findOne({ $and: [ { username:username }, { password:password } ] })
    if (user) {
        res.status(200).json({
            status:'success',
            user
        })
    }else{
        res.status(404).json({
            status:'failed',
            message:'invalid username or password'
        })
    }
 
    
})

app.listen(5050)