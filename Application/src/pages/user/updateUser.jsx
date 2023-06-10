import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useAppContext } from '../../context/context'
import {useState} from 'react'
import Loading from '../../Components/Loading'
import DefaultImage from '../../assets/images/blank-profile-picture-973460_1280.webp'


const UpdateUser = () => {


    const {email , role , name , loadingUpdate , UpdateUser , profilePic , updatePhoto} = useAppContext()

    const [data,setData] = useState({
        name : name
    })

    const [path,setPath] = useState({
        path : ''
    })

    const handleChange = (e) => {
        setData({...data , [e.target.name] : e.target.value})
    }

    const handlePhoto = (e) => {
        setPath({...path , [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        UpdateUser(data)
    }

    const handleImageSubmit = (e) => {
        e.preventDefault()
        updatePhoto(path)
    }
    
    if(loadingUpdate) {
        return <Loading/>
    }


    let photo = profilePic || DefaultImage

    

    return (
        <>  
            <h1 style={{marginTop : '20px'}} className="text-center">User Info</h1>
            <div style={{minWidth  : '300px'}}  className="container p-5 mx-auto  w-50" >
            <img   style={{borderRadius : '50%' , height : '200px' , width  :'200px' , objectFit : 'cover'}}  src={photo} />
            <Form.Group className="mb-3">
                <h5>Upload Image</h5>
                <Form.Control
                            type="file"
                            name="path"
                            value={path.path}
                            onChange={handlePhoto}
                />
                <Button onClick={handleImageSubmit} className="mt-3 w-100">Save Image</Button>
                <Form.Text className="text-muted">not working yet</Form.Text>
            </Form.Group>

                <Form.Group className="mb-3">
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