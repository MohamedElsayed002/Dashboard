
import { photoModel } from "../models/photo.model.js";
import cloudinary from 'cloudinary'


// imagesProject

const addPhoto = async (req,res) => {
    const createdBy = req.user.userId
    const result = await  cloudinary.v2.uploader.upload(
        req.file.path,
        {
            use_filename  :true,
            folder : 'imagesProject'
        }
    )

    const photo = await photoModel.create({createdBy , path : req.file.filename , image : result.url})
    res.status(201).json({message : "photo uploaded successfully" , photo})

}

const populate = async (req,res) => {
    const image = await photoModel.find({}).populate('createdBy')
    res.json(image)
}

// res.status(201).json({createdBy: createdBy , path : req.file.filename , image : result.url})


export {
    addPhoto,
    populate
}