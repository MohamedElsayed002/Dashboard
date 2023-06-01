import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {NavLink , useNavigate} from 'react-router-dom'
import { useAppContext } from '../context/context'
import {useState , useEffect} from 'react'
const Login = () => {

    const {userr,alertText,LoginUser,loginLoading} = useAppContext()
    const navigate = useNavigate()
    const [user,setUser] = useState({
        email : '',
        password : ''
    })

    const handleChange = (e) => {
        setUser({...user , [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        LoginUser(user)
    }


    useEffect(() => {
        if(userr) {
            setTimeout(() => {
                navigate('/')
            },2000)
        }
    },[userr,navigate])

    return (
        <div className="container w-50 my-5" style={{position : 'absolute', top : '10%', left : '25%'}}>
            <h1>Login</h1>
            <Form className="border p-4">
                {
                    alertText &&  (
                    <h3 style={{background   : 'red' , padding : '10px'}}>{alertText}</h3>
                        )   

                }
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                            name="email"
                            type="email"
                            placeholder='name@example.com'
                            value={user.email}
                            onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                            name="password"
                            type="password"
                            placeholder='password'
                            value={user.password}
                            onChange={handleChange}
                    />
                    <Form.Text className="text-muted">        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.</Form.Text>
                </Form.Group>
                <Button  
                        type="button"
                        onClick={handleSubmit}
                        disabled={loginLoading}
                >
                    {loginLoading ? 'loading...' : 'submit'}
                </Button> Need an account? <NavLink to="/register">Register</NavLink>
            </Form>
        </div>
    )
}

export default Login