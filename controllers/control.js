import model from "../models/model.js";
import run from "../Utils/cloudinary.js";
import fs from 'fs'
const addmentor= async (req,res)=>{
  try{
    const final={...req.files[0],...req.body}

    
    const url = await run(final)

    const createdmentor= await model.create({ mentorname: final.name, phone: final.text,
       email:final.text, address:final.text, profile: url, resume:url, portfolio:final.text })

       fs.unlink(final.path, (err) => {
        if (err) {
            console.log(err)
            return
        }
    })
    res.status(201).send({ status:"mentor Added Successfully",message:createdmentor})
  }
  catch(error){
    return res.status(400).send({
        status:'Invalid request data',message:error.message
    })
  }

}


const findmentor=async(req,res)=>{


    const id = req.params.id;

    try{

        const mentor=await model.find(id);
    res.status(200).send({ status:"Array of mentors matching the search criteria",message:mentor})
    }
    catch(error){
        return res.status(400).send({
            status:' Invalid search parameters',message:error.message

        })
    }
}




const updatementor=async(req,res)=>{
   
    const Id= req.params.id;
    const newData = {...req.files[0],...req.body}
    const newmentor=await model.findByIdAndUpdate({_id:Id},{ mentorname: newData.name, phone: newData.text,
        email:newData.text, address:newData.text, profile: url, resume:url, portfolio:newData.text } , { new: true });

        fs.unlink(newData.path, (err) => {
            if (err) {
                console.log(err)
                return
            }
        })

    res.status(200).send({ status:"mentor updated successfully",message:newmentor})
      


}





export{addmentor,findmentor,updatementor};