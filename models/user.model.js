

import mongoose, { Mongoose } from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


const userSchema =  mongoose.Schema({
    name : {
        type : String,
        minLength : [3,'too short'],
        maxLength : [70  , 'too long'],
        trim : true,
    },
    email : {
        type : String,
        validate : {
            validator : validator.isEmail,
            message : "please enter a valid email address"
        },
        unique : true,
    },
    password : {
        type : String,
        minLength : [7,'too short password'],
    },
    role : {
        type : String,
        enum : ['admin' , 'user'],
        default : 'user'
    },
    path : {
        type : String,
        default : ''
    },
    image : {
        type : String,
        default : ''
    },
    verificationToken : String,
    isVerified : {
        type : Boolean,
        default : false,
    },
    verified : Date,
})

userSchema.pre('save' , async function () {
    if(!this.isModified('password')) return
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})


userSchema.methods.CreateJWT = function  () {
    return jwt.sign({userId : this._id , name : this.name , email : this.email , role : this.role} , 'Mohamed')
}

userSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
}


export const userModel =  mongoose.model('User' , userSchema)