import { reducer } from "./reducer";
import React , {useState,useEffect,useContext , useReducer} from 'react'


const initialState = {
    isLoading  :false,
    showAlert : false,
    alertText : '',
    alertType : ''
}

const AppContext = React.createContext()

const AppProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer,initialState)

    const showAlert = () => {
        dispatch({type  : 'SHOW_ALERT'})
        setTimeout(() => {
            clearAlert()
        },2000)
    }
    
    const clearAlert = () => {
        dispatch({type : 'CLEAR_ALERT'})
    }

    return (
        <AppContext.Provider value={{
            ...state,
            showAlert
        }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext)
}

export {useAppContext , AppProvider}