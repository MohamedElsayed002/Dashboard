

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
            showAlert : true,
            alertText : 'user created!'
        }
    }
    
    if(action.type === 'USER_REGISTER') {
        return {
            ...state,
            userr : action.payload.data.data.user,
            token : action.payload.data.data.token
        }
    }

    throw new Error('there is no reducer ')
}