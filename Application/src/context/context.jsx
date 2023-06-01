import { reducer } from "./reducer";
import React , {useState,useEffect,useContext , useReducer} from 'react'
import {useMutation , useQueryClient} from '@tanstack/react-query'
import axios from 'axios'
import { toast } from "react-toastify";


const token = localStorage.getItem('token')
const user = localStorage.getItem('user')


const initialState = {
    isLoading  :false,
    showAlert : false,
    alertText : '',
    alertType : '',
    userr : user || '',
    token : token ||  '',
    userLocation : ''
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

    const queryClient = useQueryClient()

    // Register 
    const {mutate : registerUser  , isLoading } = useMutation({
        mutationFn : (value) => axios.post('http://localhost:3050/api/v1/auth/register' , value),
        onSuccess : (data) => {
            queryClient.invalidateQueries({queryKey : ['tasks']})
            dispatch({type : 'USER_REGISTER' , payload : {data}})
            localStorage.setItem('token' , data.data.token)
            localStorage.setItem('user' , JSON.stringify(data.data.user))      
            toast.success(data.data.message)
        },
        onError : (error) => {
            toast.error(error.response.data.msg)
        }
    })


    // Login
    const {mutate : LoginUser , isLoading : loginLoading} = useMutation({
        mutationFn : (value) => axios.post('http://localhost:3050/api/v1/auth/login' , value),
        onSuccess : (data) => {
            queryClient.invalidateQueries({queryKey : ['tasks']})
            dispatch({type : 'USER_LOGGED_IN' , payload : {data}})
            localStorage.setItem('token' , data.data.token)
            localStorage.setItem('user' , JSON.stringify(data.data.isExist))
            toast.success(data.data.message)
        },
        onError : (error) => {
            toast.error(error.response.data.msg)
        }
    }) 
    return (
        <AppContext.Provider value={{
            ...state,
            showAlert,
            registerUser,
            isLoading,
            LoginUser,
            loginLoading
        }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext)
}

export {useAppContext , AppProvider}