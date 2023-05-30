import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {NavLink} from 'react-router-dom'
import {useState} from 'react'
const Register = () => {

    const [user,setUser] = useState({
        name : '',
        email : '',
        password : '',
    })

    const handleChange = (e) => {
        setUser({...user , [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
    }


    return (
        <div className="container w-50 my-5" style={{position : 'absolute', top : '10%', left : '25%'}}>
            <h1>Register</h1>
            <Form className="border p-4">
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control   
                                type="text"
                                placeholder="Mohamed"
                                value={user.name}
                                name="name"
                                onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                                type="email" 
                                placeholder='name@example.com'
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                                type="password"
                                placeholder='password'
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                    />
                    <Form.Text className="text-muted">        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.</Form.Text>
                </Form.Group>
                <Button     
                        onClick={handleSubmit}
                        type="button"
                >Submit</Button> already have account? <NavLink to="/login">Login</NavLink>
            </Form>
        </div>
    )
}

export default Register