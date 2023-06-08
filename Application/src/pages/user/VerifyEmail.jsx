
import axios from 'axios'
import {useMutation , useQueryClient} from '@tanstack/react-query'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const urlParams = new URLSearchParams(window.location.search);
const verificationToken = urlParams.get('token');
const email = urlParams.get('email');


const VerifyEmail = () => {

    const [message,setMessage] = useState('')
    const [error,setError] = useState('')
    const navigate = useNavigate();

    const {mutate : confirmEmail} = useMutation({
        mutationFn : async () => {
            const values = {
                verificationToken : urlParams.get('token'),
                email : urlParams.get('email')
            }
            const {data} = await  axios.post('http://localhost:3050/api/v1/auth/verify-Email' , values)
            setMessage(data.message)
        },
        onSuccess : () => {
            setTimeout(() => {
                navigate('/login')
            },3000)
        },
        onError : (error) => {
            setError(error.response.data.msg)
            setMessage('')
        }
    })

    useEffect(() => {
        confirmEmail()
    },[email,verificationToken])


    return (
        <>
            {
                message &&  (
                    <>
                    <h1 className="text-center my-5">{message}</h1>
                    <h4 className="text-center">you can login now</h4>
                    </>
                )
            }
            {
                error &&  <h1 className="text-center my-5">{error}</h1>

            }
        </>
    )
}

export default VerifyEmail