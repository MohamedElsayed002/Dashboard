
import express from 'express'
import dotenv from 'dotenv'
import 'express-async-errors'
import cors from 'cors'
import morgan from 'morgan'
import cloudinary from 'cloudinary'
dotenv.config()

//db Connection 
import {dbConnection} from './database/dbConnection.js'
// Middleware Error
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

// Routes 
import authRouter from './route/auth.route.js'

import { sendEmail } from './utils/sendEmail.js'
import photosRoute from './route/photos.route.js'

cloudinary.v2.config({
    cloud_name : process.env.CLOUD_NAME,
    api_key : process.env.API_KEY,
    api_secret : process.env.API_SECRET
})


const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(express.static('./uploads/'))
app.use('/api/v1/auth' , authRouter )
app.use(photosRoute)

app.get('/' , (req,res) => {
    res.send('<h1>Mohamed Elsayed</h1>')
})

app.get('/sendEmail' , (req,res) => {
    res.send('<h1>sending email <a href="/emailSend">send email</a></a></h1>')
    sendEmail()
})

app.get('/emailSend', sendEmail)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const PORT = process.env.PORT || 3001
dbConnection()
app.listen(PORT , () => console.log(`server listening on ${PORT}`))