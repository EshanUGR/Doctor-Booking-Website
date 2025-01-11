import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import conectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js';
//app config

const app=express();
const port=process.env.PORT || 4000;
conectDB();
connectCloudinary();
app.use(express.json());
app.use(cors());
//api endpoint

app.use('/api/admin',adminRouter)
app.get('/',(req,res)=>
{
  res.send('API IS WORKING');
})
app.listen(port,()=>
{
  console.log( `server is running on port : ${port}`);

})

// 6.4