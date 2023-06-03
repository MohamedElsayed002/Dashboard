

import express from 'express'
import { Register,
        Login,
        updateUser,
        changePassword,
        getAllUsers,
        getSingleUser,
        deleteUser } from '../controllers/auth.controller.js'
import { auth , authorizePermissions } from '../middleware/auth.js'

const authRouter = express.Router()


authRouter.post('/register' , Register)
authRouter.post('/login' , Login)
authRouter.patch('/updateUser',  auth, updateUser)
authRouter.patch('/changePassword' , auth , changePassword)
authRouter.get('/allUsers' , [auth , authorizePermissions('admin')] , getAllUsers)
authRouter.get('/allUsers/:id' , [auth , authorizePermissions('admin')] , getSingleUser)
authRouter.delete('/deleteUser/:id' , [auth , authorizePermissions('admin')] ,deleteUser)


export default authRouter