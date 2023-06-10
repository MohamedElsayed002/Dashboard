

import express from 'express'
import { Register,
        Login,
        updateUser,
        changePassword,
        getAllUsers,
        getSingleUser,
        deleteUser,
        addPhoto,
        verifyEmail,
        forgotPassword,
        resetPassword } from '../controllers/auth.controller.js'
import { auth , authorizePermissions } from '../middleware/auth.js'
import {fileUpload} from '../utils/uploadfiles.js'

const authRouter = express.Router()


authRouter.post('/register' , Register)
authRouter.post('/login' , Login)
authRouter.patch('/updateUser',  auth, updateUser)
authRouter.patch('/changePassword' , auth , changePassword)
authRouter.post('/verify-email' , verifyEmail)
authRouter.get('/allUsers' , [auth , authorizePermissions('admin')] , getAllUsers)
authRouter.get('/allUsers/:id' , [auth , authorizePermissions('admin')] , getSingleUser)
authRouter.delete('/deleteUser/:id' , [auth , authorizePermissions('admin')] ,deleteUser)
authRouter.post('/photo' ,  auth , fileUpload('path') ,addPhoto)
authRouter.post('/reset-password' , resetPassword)
authRouter.post('/forgot-password' , forgotPassword)


export default authRouter