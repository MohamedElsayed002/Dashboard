
import express from 'express'
import dotenv from 'dotenv'
import 'express-async-errors'
import cors from 'cors'
import morgan from 'morgan'
dotenv.config()

//db Connection 
import {dbConnection} from './database/dbConnection.js'
// Middleware Error
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

// Routes 
import authRouter from './route/auth.route.js'




const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use('/api/v1/auth' , authRouter )

app.get('/' , (req,res) => {
    res.send('<h1>Mohamed Elsayed</h1>')
})


app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const PORT = process.env.PORT || 3001
dbConnection()
app.listen(PORT , () => console.log(`server listening on ${PORT}`))