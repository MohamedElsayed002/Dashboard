


export const testUser = (req,res,next) => {
    if(req.user.testUser) {
        throw new Error('test user. read only!')
    }
    next()
}