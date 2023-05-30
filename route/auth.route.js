

import express from 'express'
import { Register , Login } from '../controllers/auth.controller.js'

const authRouter = express.Router()


authRouter.post('/register' , Register)
authRouter.post('/login' , Login)

export default authRouter