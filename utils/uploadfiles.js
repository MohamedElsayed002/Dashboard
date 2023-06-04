import multer from 'multer'
import { nanoid } from 'nanoid'

export const fileUpload = (fieldName) => {

    const storage = multer.diskStorage({
        destination : function (req,file,cb) {
            cb(null , 'uploads/')   
        },
        filename : function (req,file,cb) {
            cb(null ,nanoid() + "-" + file.originalname)
        }
    })

    function fileFilter(req,file,cb) {
        if(file.mimetype.startsWith('image')){
            cb(null,true)
        }else {
            cb(null,false)
        }
    }

    const upload = multer({storage})

    return upload.single(fieldName)
}