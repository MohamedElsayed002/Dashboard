

import express from 'express'
import { addPhoto } from '../controllers/photos.controller.js'
import {fileUpload} from '../utils/uploadfiles.js'
import { auth, authorizePermissions } from '../middleware/auth.js'
const photosRoute = express.Router()


photosRoute.post('/photo' ,  auth , fileUpload('path') ,addPhoto)

export default photosRoute