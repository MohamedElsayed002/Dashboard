import jwt from 'jsonwebtoken'

export const auth = async  (req,res,next) => {
    const token = req.headers.authorization
    if(!token) {
        throw new Error('you are not authorized to access this page')
    }
    try {
        let decoded = jwt.verify(token ,'Mohamed')
        const {userId , name , role} = decoded
        const testUser = userId === '64871f03a25889d0c03b08bc'
        req.user = {userId , name , role , testUser  }
        console.log(req.user.testUser)

        next()
    } catch(error) {
        throw new Error('something went wrong try again later :( ')
    }   
}


export const authorizePermissions = (...roles) => {
    return (req,res,next) => {
        if(!roles.includes(req.user.role)) {
            throw new Error("you are not authorized to access this route")
        }
        next()
    }
}