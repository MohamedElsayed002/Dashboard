import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useAppContext } from '../../context/context'
import {useState} from 'react'


const UpdateUser = () => {


    const {email , role , name , loadingUpdate , UpdateUser} = useAppContext()

    const [data,setData] = useState({
        name : name
    })

    const handleChange = (e) => {
        setData({...data , [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        UpdateUser(data)
    }

    return (
        <>  
            <h1 style={{marginTop : '20px'}} className="text-center">User Info</h1>
            <div style={{minWidth  : '300px'}}  className="container p-5 mx-auto  w-50" >
                <Form.Group className="mb-3">
                    {/* <Form.Label>email</Form.Label> */}
                    <h5>Email</h5>
                    <Form.Control
                        type="text"
                        defaultValue={email}
                        aria-label="Disabled input example"
                        disabled
                        readOnly
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="my-4">
                    <h5>role</h5>
                    <Form.Control
                            type="text"
                            defaultValue={role}
                            aria-label="Disabled input example"
                            disabled
                            readOnly
                    />
                </Form.Group>
                <Form.Group className="my-4">
                    <h5>name</h5>
                    <Form.Control   
                            type="text"
                            placeholder={name}
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                    />
                </Form.Group>
                <Button onClick={handleSubmit} className="btn w-100 " variant='success'>
                    {loadingUpdate ? 'loading..' : 'submit'}
                </Button>
            </div>
        </>
    )
}

export default UpdateUser