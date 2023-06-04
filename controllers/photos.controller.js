
import { photoModel } from "../models/photo.model.js";



const addPhoto = async (req,res) => {
    const createdBy = req.user.userId
    console.log(req.file)
    res.status(201).json({createdBy: createdBy , path : req.file.filename})
}

export {
    addPhoto
}