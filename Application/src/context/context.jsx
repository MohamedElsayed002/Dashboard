import { reducer } from "./reducer";
import React , {useState,useEffect,useContext , useReducer} from 'react'
import {useMutation , useQueryClient} from '@tanstack/react-query'
import axios from 'axios'
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const name = localStorage.getItem('name')
const email = localStorage.getItem('email')
const role = localStorage.getItem('role')
const image = localStorage.getItem('image')


const initialState = {
    isLoading  :false,
    showAlert : false,
    alertText : '',
    alertType : '',
    userr : user || '',
    name : name || '',
    role : role || '',
    email : email || '',
    token : token ||  '',
    profilePic : image || ''
}



const AppContext = React.createContext()

const AppProvider = ({children}) => {



    const [state,dispatch] = useReducer(reducer,initialState)
    const [users,setUsers] = useState([])
    const [singleUsers,setSingleUser] = useState({
        name : '',
        email : '',
        role : '',
        image : '',
        id : '',
    })
    const navigate = useNavigate()

    const authFetch = axios.create({
        baseURL : '',
        headers : {
            Authorization : `${state.token}`
        }
    })

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
            toast.success(data.data.message)
        },
        onError : (error) => {
            toast.error(error.response.data.msg)
        }
    })

    // confirm email 

    const {mutate : confirmation} = useMutation({
        mutationFn : async  (verificationToken,email) => {
            const data = await  axios.post("localhost:3050/api/v1/auth/verify-Email",verificationToken,email)
            console.log(data)
            console.log(email)
        },
        onSuccess : (data) => {
            console.log(data)
        },
        onError : (error) => {
            console.log(error)
        }
    })


    // Login
    const {mutate : LoginUser , isLoading : loginLoading} = useMutation({
        mutationFn : (value) => axios.post('http://localhost:3050/api/v1/auth/login' , value),
        onSuccess : (data) => {
            queryClient.invalidateQueries({queryKey : ['tasks']})
            console.log(data)
            dispatch({type : 'USER_LOGGED_IN' , payload : {data}})
            localStorage.setItem('token' , data.data.token)
            localStorage.setItem('user' , JSON.stringify(data.data.isExist))
            localStorage.setItem('name' , data.data.isExist.name)
            localStorage.setItem('email' , data.data.isExist.email)
            localStorage.setItem('role' , data.data.isExist.role)
            localStorage.setItem('image' , data.data.isExist.image)
            toast.success(data.data.message)
        },
        onError : (error) => {
            toast.error(error.response.data.msg)
        }
    }) 

    const {mutate : UpdateUser , isLoading : loadingUpdate} = useMutation({
        mutationFn : (value) => authFetch.patch('http://localhost:3050/api/v1/auth/updateUser' , value),
        onSuccess : (data) => {
            queryClient.invalidateQueries({queryKey : ['tasks']})
            dispatch({type : 'UPDATE_USER' , payload : {data}})
            localStorage.setItem('token' , data.data.token)
            localStorage.setItem('user' , JSON.stringify(data.data.user))
            localStorage.setItem('name' , data.data.user.name)  
            localStorage.setItem('email' , data.data.user.email)     
            localStorage.setItem('role' , data.data.user.role)
            toast.success(data.data.message)
        },
        onError : (error) => {
            toast.error(error.response.data.msg)
        }
    })

    const {mutate : changePassword , isLoading : loadingChangePassword} = useMutation({
        mutationFn : (value) => authFetch.patch('http://localhost:3050/api/v1/auth/changePassword' , value),
        onSuccess : (data) => {
            queryClient.invalidateQueries({queryKey : ['tasks']})
            dispatch({type : 'CHANGE_PASSWORD' , payload : {data}})
            localStorage.setItem('token' , data.data.token)
            localStorage.setItem('user' , JSON.stringify(data.data.user))
            localStorage.setItem('name' , data.data.user.name)  
            localStorage.setItem('email' , data.data.user.email)     
            localStorage.setItem('role' , data.data.user.role)
            toast.success(data.data.message)
        },
        onError : (error) => {
            toast.error(error.response.data.msg)
        }
    })

    const {mutate : fetchUsers , isLoading : LoadingData} = useMutation({
        mutationFn :async  (search) => {
            let data = await authFetch(`http://localhost:3050/api/v1/auth/allUsers?search=${search}`)
            setUsers(data.data.user)
        },

        onError : (error) => {
            toast.error(error.response.data.msg)
        }
    })

    const {mutate : getSingleUser , isLoading : singleUserLoading} = useMutation({
        mutationFn : async (id) => {
            let data = await authFetch(`http://localhost:3050/api/v1/auth/allUsers/${id}`)
            setSingleUser({
                ...singleUsers,
                name : data.data.user[0].name,
                email :data.data.user[0].email,
                image : data.data.user[0].image,
                role : data.data.user[0].role,
                id : data.data.user[0]._id
            })
        }
    })

    const {mutate : deleteUser} = useMutation({
        mutationFn : async (id) => {
            console.log(id)
            let data = await authFetch.delete(`http://localhost:3050/api/v1/auth/deleteUser/${id}`)
            toast.success(data.data.message)
        }
    })

    const {mutate : updatePhoto} = useMutation({
        mutationFn : async (value) => {
            let data = await authFetch.post('http://localhost:3050/api/v1/auth/photo' , value)
            console.log(data)
        }
    })



    const {mutate : forgotPassword} = useMutation({
        mutationFn : async (value) => {
            let {data} = await axios.post('http://localhost:3050/api/v1/auth/forgot-password' , value)
            toast.success(data.message)
        },
        onError : (error) => {
            toast.error(error.response.data.msg)
        }
    })

    const {mutate : resetPassword} = useMutation({
        mutationFn : async (value) => {
            let {data} = await axios.post('http://localhost:3050/api/v1/auth/reset-password' , value)
            toast.success(data.message)
        },
        onSuccess : () => {
            setTimeout(() => {
                navigate('/login')
            },3000)
        },
        onError : (error) => {
            toast.error(error.response.data.msg)
        }
    })


    const LogoutUser = () => {
        dispatch({type : 'CLEAR_ALL_DATA'})
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('name')
        localStorage.removeItem('email')
        localStorage.removeItem('role')
        localStorage.removeItem('image')
        setSingleUser({
            name : '',
            email : '',
            role : '',
            image : '',
            id : ''
        })
    }
    return (
        <AppContext.Provider value={{
            ...state,
            showAlert,
            registerUser,
            isLoading,
            LoginUser,
            loginLoading,
            LogoutUser,
            clearAlert,
            UpdateUser,
            loadingUpdate,
            changePassword,
            loadingChangePassword,
            fetchUsers,
            users,
            LoadingData,
            getSingleUser,
            singleUsers,
            singleUserLoading,
            deleteUser,
            updatePhoto,
            confirmation,
            forgotPassword,
            resetPassword
        }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext)
}

export {useAppContext , AppProvider}