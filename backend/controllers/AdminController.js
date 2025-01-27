//api for adding doctor
import validator from 'validator'
import bcrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from '../models/doctorModel.js'

import jwt from 'jsonwebtoken'
const addDoctor=async(req,res)=>
{
  try{
const{name,email,password,speciality,degree,experience,about,fees,address,image}=req.body;

const imageFile=req.file;
// checking for all data add for doctor
if(!name || !email || !speciality || !degree || !experience || !about || !fees || !address || !image)
{
  return res.json({success:false,message:"Missing details!"})
}

//validating email format using if statement

if(!validator.isEmail(email))
{
  return res.json({success:false,message:"Please enter a valid email"});


}
if(password.length<8)
{
return res.json({ success: false, message: "Please enter a strong password" });
}

// hashing the doctor password
const salt=await bcrypt.genSalt(10);
const hashedPassword=await bcrypt.hash(password,salt);


//upload image to cloudinary
const imageUpload=await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"});


const imageUrl=imageUpload.secure_url

const doctorData={
  name,
  email,
  image:imageUrl,
  password:hashedPassword,
  speciality,
  degree,
  experience,
  about ,
  fees,
  address:JSON.parse(address),
  date:Date.now()
//5.34
  }

  const newDoctor=new doctorModel(doctorData)
  await newDoctor.save();


  res.json({success:true,message:"doctor added"})
 
  }

  catch(error)
  {
console.log(error);

res.json({success:false,message:error.message});
  }

}

//api for the admin login

const loginAdmin=async(req,res)=>
{
  try{
const {email,password}=req.body;

if (
  email === process.env.ADMIN_EMAIL &&
  password === process.env.ADMIN_PASSWORD
) {
  console.log(process.env.process.env.ADMIN_EMAIL);

const token = jwt.sign(email + password, process.env.JWT_SECRET);

res.json({success:true,token})
  
}

else{

  res.json({success:false,message:'Invalid Credentials'});
}
  }
  catch(error)
  {
    console.log(error);
    res.json({success:false,message:error.message});
  }
}
export {addDoctor,loginAdmin}
