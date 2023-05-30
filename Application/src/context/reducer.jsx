

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

    throw new Error('there is no reducer ')
}