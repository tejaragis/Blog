import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userrouter from './routes/user.route.js';
import authrouter from './routes/auth.route.js';
const app=express();
app.use(express.json());
dotenv.config();
mongoose.connect(process.env.Mongo)
         .then(()=>{console.log('Mongodb is connected')})
         .catch((err)=>{
            console.log(err);
         })

app.listen(3000,()=>{
    console.log('Server is running on port 3000!');
});
app.use('/api/user',userrouter)
app.use('/api/auth',authrouter)