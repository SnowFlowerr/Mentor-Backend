import express from "express";
import mongoose from "mongoose";
import router from "../Backend/routes/route.js" 
import dotenv from "dotenv"


dotenv.config()
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("database connected");
    app.listen(8080, () => {
      console.log("Server Started at Port", 8080);
    });
  })
  .catch((err) => console.log(err));

  
app.use("/", router);