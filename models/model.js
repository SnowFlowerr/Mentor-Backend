import mongoose from "mongoose";


const mentorSchema = new mongoose.Schema({
    mentorname:{
        type:String,
        required:true,

    },
  
    phone:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true,

    },
    profile:{
        type:String,


    },
   
    resume:{
        type:String,

    },
    portfolio:{
        type:String,

    },
  

},{timestamps:true})

export default mongoose.model("mentor",mentorSchema);