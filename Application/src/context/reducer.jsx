

export const reducer = (state,action) => {

    if(action.type === 'SHOW_ALERT') {
        return {
            ...state,
            showAlert : true,
            alertText : 'please provide all the fields',
            alertType : 'danger'
        }
    }

    if(action.type === 'CLEAR_ALERT') {
        return {
            ...state,
            showAlert : false,
            alertText : '',
            alertType : ''
        }
    }

    if(action.type === 'USER_LOGGED_IN') {
        return {...state,
            userr : action.payload.data.data.isExist,
            token : action.payload.data.data.token,
            name : action.payload.data.data.isExist.name,
            email : action.payload.data.data.isExist.email,
            role : action.payload.data.data.isExist.role
            // showAlert : true,
            // alertText : 'user created!'
        }
    }
    
    if(action.type === 'USER_REGISTER') {
        return {
            ...state,
            token : action.payload.data.data.token,
            userr : action.payload.data.data.user,
            name : action.payload.data.data.user.name,
            email  : action.payload.data.data.user.email,
            role : action.payload.data.data.user.role
        }
    }

    if(action.type === "CLEAR_ALL_DATA") {
        return {
            ...state,
            showAlert : false,
            alertText : '',
            userr : '',
            name : '',
            email : '',
            token : '',
            role : ''
        }
    }

    throw new Error('there is no reducer ')
}