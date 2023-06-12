import {userModel} from '../models/user.model.js'
import cloudinary from 'cloudinary'
import {sendEmail} from '../utils/sendEmail.js'
import crypto from 'crypto'


const Register = async (req,res) => {
    const {name,email,password,role} = req.body
    if(!name || !email || !password) {
        throw new Error('please provide all the required fields')
    }

    const checkingEmail = await userModel.findOne({email : email})
    if(checkingEmail) {
        throw new Error('please choose unique email')
    }

    const verificationToken  = crypto.randomBytes(40).toString('hex')

    const user = await userModel.create({
        name,
        email,
        password,
        verificationToken
    })

    const origin = `http://localhost:5173/verify-email?token=${verificationToken}&email=${email}`

    await sendEmail(email , name , `hello ${name} please check your email to verify your account <br/> 
        <a href=${origin}>Here</a> <br/>
    `)

    res.status(201).json({ message : "success! please check your email to verify your account" , user})
}


const verifyEmail = async (req,res) => {
    const {verificationToken , email} = req.body
    const user = await userModel.findOne({email})

    if(!user) {
        throw new Error('verification failed!')
    }

    if(user.verificationToken !==  verificationToken) {
        throw new Error('verification failed')
    }


    user.isVerified = true
    user.verified = Date.now()
    user.verificationToken = ''

    await user.save()

    res.status(201).json({message : 'email verified' })

}


const Login = async (req,res) => {
    const {email , password} = req.body
    if(!email || !password) {
        throw new Error('please all fields must be provided')
    }

    let isExist = await userModel.findOne({email  : email}).select('+password')
    if(!isExist) {
        throw new Error('user not found')
    }

    const isMatching =  await isExist.comparePassword(password)
    if(!isMatching) {
        throw new Error('password mismatch')
    }

    if(!isExist.isVerified) {
        throw new Error('please verify your account first')
    }

    let token = isExist.CreateJWT()
    isExist.password = undefined
    res.json({message : "logged in successfully" , token , isExist})

}

const updateUser = async (req,res) => {
    const {name} = req.body
    if(!name) {
        throw new Error('please enter your new name ')
    }
    let user = await userModel.findOne({_id : req.user.userId})
    if(!user) {
        throw new Error('user not found ')
    }

    user.name = name
    await user.save()

    let token = user.CreateJWT()

    res.status(201).json({message : 'user modified successfully' , user , token})
}


const changePassword = async (req,res) => {
    const {oldPassword , newPassword} = req.body

    if(!oldPassword || !newPassword) {
        throw new Error('please enter all required fields')
    }

    let user = await userModel.findOne({_id : req.user.userId})
    if(!user) {
        throw new Error('user not found')
    }

    let checkingPassword = await user.comparePassword(oldPassword)
    if(!checkingPassword) {
        throw new Error('password mismatch ')
    }

    user.password = newPassword
    await user.save()
    let token = user.CreateJWT()
    res.status(201).json({message : "password changed" , user , token})
}

const getAllUsers = async (req,res) => {
    const {search} = req.query
    
    const queryObject = {

    }

    if(search) {
        queryObject.name = {$regex : search , $options : 'i'}
    }

    let user = await userModel.find(queryObject).select('-password')
    res.status(201).json({user})
}

const getSingleUser = async (req,res) => {
    console.log(req.user.testUser)
    const {id} = req.params
    let user = await userModel.find({_id : id })
    if(!user) {
        throw new Error(`no user found with id ${id}`)
    }
    res.status(201).json({message : "success" , user})
}

const deleteUser = async (req,res) => {
    const {id} = req.params
    let user = await userModel.findByIdAndDelete({_id : id})
    if(!user) {
        throw new Error('user not founddddddddddddd')
    }


    res.status(201).json({message : "user deleted successfully"})
}


const addPhoto = async (req,res) => {
    const result = await  cloudinary.v2.uploader.upload(
        req.file.path,
        {
            use_filename  :true,
            folder : 'imagesProject'
        }
    )

    const photo = await userModel.findByIdAndUpdate(req.user.userId , {  path : req.file.filename , image : result.url} , {new :true})
    res.status(201).json({message : "photo uploaded successfully" , photo})

}

const forgotPassword = async (req,res) => {

    const {email} = req.body

    if(!email) {
        throw new Error('please provide your email address')
    }

    const user = await userModel.findOne({email})

    if(!user) {
        throw new Error('email not found :) ')
    }

    if(user) {
        const passwordToken = crypto.randomBytes(30).toString('hex')
        const fiveMinutes = 1000 * 60 * 5
        const  passwordTokenExpirationDate = new Date(Date.now() + fiveMinutes)


        const origin = `http://localhost:5173/reset-password?token=${passwordToken}&email=${email}`

        await sendEmail(email , user.name , `hello ${user.name} please reset password by clicking on the following link  : <a href=${origin}>Here</a> <br/>
    `)

        user.passwordToken = passwordToken
        user.passwordTokenExpirationDate = passwordTokenExpirationDate
        await user.save()
    }



    res.status(201).json({message : 'please check your email for reset password link'})
}

const resetPassword = async (req,res) => {

    const {token , email , password} = req.body
    if(!token || !email || !password) {
        throw new Error('please provide all values')
    }

    const user = await userModel.findOne({email})
    if(user) {
        const currentDate = new Date()
        if(user.passwordToken === token && user.passwordTokenExpirationDate > currentDate) {
            user.password = password
            user.passwordToken = null
            user.passwordTokenExpirationDate = null
            user.save()
        }
    }

    res.status(201).json({message : 'password reset successful'})

}

export {
    Register,
    Login,
    updateUser,
    changePassword,
    getAllUsers,
    getSingleUser,
    deleteUser,
    addPhoto,
    verifyEmail,
    forgotPassword,
    resetPassword
}