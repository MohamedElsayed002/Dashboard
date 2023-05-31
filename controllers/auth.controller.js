import {userModel} from '../models/user.model.js'


const Register = async (req,res) => {
    const {name,email,password,role} = req.body
    if(!name || !email || !password) {
        throw new Error('please provide all the required fields')
    }

    const checkingEmail = await userModel.findOne({email : email})
    if(checkingEmail) {
        throw new Error('please choose unique email')
    }
    let user = await userModel.create({email,name,password,role})

    let token = user.CreateJWT()
    res.status(201).json({message : "user created successfully " , user , token})
}


const Login = async (req,res) => {
    const {email , password} = req.body
    if(!email || !password) {
        throw new Error('please all fields must be provided')
    }

    let isExist = await userModel.findOne({email  : email})
    if(!isExist) {
        throw new Error('user not found')
    }

    const isMatching =  await isExist.comparePassword(password)
    if(!isMatching) {
        throw new Error('password mismatch')
    }

    let token = isExist.CreateJWT()
    res.json({message : "logged in successfully" , token , isExist})

}

export {
    Register,
    Login
}