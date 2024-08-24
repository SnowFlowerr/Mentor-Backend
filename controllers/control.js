import model from "../models/model.js";
import run from "../Utils/cloudinary.js";

const addmentor= async (req,res)=>{
  try{
    const data1=req.files[0]
    const data2=req.files[1]
    const final=req.body

    const url1 = await run(data1)
    const url2 = await run(data2)

    const createdmentor= await model.create({ mentorname: final.mentorname, phone: final.phone, email:final.email, address:final.address, profile: url1, resume:url2, portfolio:final.portfolio })


    res.status(201).send({ status:"mentor Added Successfully",message: createdmentor})
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