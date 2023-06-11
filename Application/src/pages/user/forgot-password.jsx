


import React , {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useAppContext } from '../../context/context';


const ForgotPassword     = () => {

    const [user,setUser] = useState({
        email : ''
    })

    const {forgotPassword} = useAppContext()


    const handleChange = (e) => {
        setUser({...user , [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        forgotPassword(user)
    }
    return (
        <div className="text-center my-5">
            <h1>Forgot Password</h1>
            <Form.Control   
                        className="w-50  mx-auto mt-5 mb-3"
                        type="email"
                        placeholder="name@example.com"
                        value={user.email}
                        name="email"
                        onChange={handleChange}
            />
            <Button onClick={handleSubmit} className="w-50">Reset Password</Button>
        </div>
    )
}

export default ForgotPassword
