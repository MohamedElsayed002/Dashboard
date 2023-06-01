
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useAppContext } from '../../context/context'
import {useState} from 'react'


const ChangePassword = () => {


    const {changePassword , loadingChangePassword} = useAppContext()

    const [data,setData] = useState({
        oldPassword : '',
        newPassword : '',
    })

    const handleChange= (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        changePassword(data)
    }

    return (
        <>  
        <h1 style={{marginTop : '20px'}} className="text-center">Change Password</h1>
        <div style={{minWidth  : '300px'}}  className="container p-5 mx-auto  w-50" >
            <Form.Group className="mb-3">
                <h5>old password</h5>
                <Form.Control   
                        type="password"
                        placeholder='enter your old password'
                        name="oldPassword"
                        value={data.oldPassword}
                        onChange={handleChange}
                />
                <Form.Text className="text-muted">

                </Form.Text>
            </Form.Group>
            <Form.Group className="my-4">
                <h5>new password</h5>
                <Form.Control   
                        type="password"
                        placeholder='enter your new password'
                        name="newPassword"
                        value={data.newPassword}
                        onChange={handleChange}
                />
            </Form.Group>
            <Button onClick={handleSubmit} className="btn w-100 " variant='success'>
                {loadingChangePassword ? 'loading...' : 'submit'}
            </Button>
        </div>
    </>
    )
}


export default ChangePassword