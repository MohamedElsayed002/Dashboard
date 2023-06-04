

import mongoose from 'mongoose'



const photoSchema =  mongoose.Schema({
    path : String,
    createdBy : {
        type : mongoose.Types.ObjectId,
        ref : 'User'
    }
},
{
    timestamps : true
})



export const photoModel =  mongoose.model('photo', photoSchema)