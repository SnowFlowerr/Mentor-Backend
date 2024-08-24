import express from 'express';

import { addmentor,findmentor,updatementor } from '../controllers/control.js';
import multer from 'multer';
import path from 'path';


const storage=multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, 'uploads')
    },
    filename:(req ,file, cb)=>{
        cb(null, file.fieldname +"_"+Date.now()
        + path.extname(file.originalname)
        )
    }
})

const upload=multer({
    storage:storage
})





const router= express.Router();


router.post('/addmentor',upload.any(),addmentor,);
router.get('/mentor/:id',findmentor);

router.put('/updatementor/:id',upload.any(),updatementor,);








export default router;