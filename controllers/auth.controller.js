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

    let isExist = await userModel.findOne({email  : email}).select('+password')
    if(!isExist) {
        throw new Error('user not found')
    }

    const isMatching =  await isExist.comparePassword(password)
    if(!isMatching) {
        throw new Error('password mismatch')
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


// const deleteProduct = async (req,res) => {
//     const {id : productId} = req.params
//     const product = await Product.findOne({_id : productId})
//     if(!product) {
//         throw new Error("product not found")
//     }

//     await product.delete()

//     res.status(201).json({message : "product deleted successfully"})
// }

export {
    Register,
    Login,
    updateUser,
    changePassword,
    getAllUsers,
    getSingleUser,
    deleteUser
}