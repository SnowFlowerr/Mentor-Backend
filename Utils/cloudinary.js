import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv'

dotenv.config();
    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.cloud_name, 
        api_key: process.env.api_key, 
        api_secret: process.env.api_secret // Click 'View API Keys' above to copy your API secret
    })

    async function run(img) {
        try{
            const res=await cloudinary.uploader.upload(img.path,
                { resource_type: "auto",public_id:img.filename }
            )
            // console.log(res)
            return res.url;
            
        }
        catch(err){
            console.log(err)
        }
    }

    export default run;