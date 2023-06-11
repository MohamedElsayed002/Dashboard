


import React , {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useAppContext } from '../../context/context';


const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');
const email = urlParams.get('email');



const ResetPassword = () => {

    const {resetPassword} = useAppContext()

    const [user,setUser] = useState({
        password : ''
    })

    const handleChange = (e) => {
        setUser({...user , [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let obj = {
            token,
            email,
            password : user.password
        }
        console.log(obj)
        resetPassword(obj)
    }

    return (
        <div className ="text-center my-5">
            <h1>Reset Password</h1>
            <Form.Control
                type="text"
                placeholder={email}
                aria-label="Disabled input example"
                disabled
                readOnly
                className="mt-4 w-50 mx-auto"
            />
            <Form.Control
                type="password"
                placeholder="enter new password"
                className="w-50 mx-auto mt-3"
                value={user.password}
                name="password"
                onChange={handleChange}
            />
            <Button onClick={handleSubmit}  className="w-50 mt-4">Reset Password</Button>

        </div>
    )
}

export default ResetPassword
