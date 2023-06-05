import { useEffect, useState } from "react"
import { useAppContext } from "../../context/context"
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';


import { NavLink , Navigate } from "react-router-dom";

const Admin = () => {

    const {fetchUsers ,userr, users ,role, deleteUser}  = useAppContext()
    const [search,setSearching] = useState('')


    
    useEffect(() => {
        fetchUsers(search)
    },[search])

    if(role === 'user') {
        return  <Navigate to="/" />
    }



    return (
        <>
        <h1 className="text-center my-5">Users Dashboard </h1>
        {
            users.length > 0 && (
                <h6 style={{marginTop : '-30px'}} className="text-center text-muted">number of users {users.length}</h6>
            )
        }
        <Form.Control   
                    value={search}
                    className="w-50 mx-auto"
                    type="text" placeholder="search by name"
                    onChange={(e) => setSearching(e.target.value)}
        />
            <Row className="m-5 ">
                    {
                        users.map((user) => {
                            const {name , email , _id , role} = user
                            return (
                                <Col key={_id}>
                                    <Card className="mx-auto my-2" style={{width : '18rem'}}>
                                        <Card.Body>
                                            <Card.Title>{name}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
                                            <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                            </Card.Text>
                                            <Card.Link to={`/showMoreInfo/${_id}`} as={NavLink}>
                                            <Button variant="success">More Info</Button>
                                            </Card.Link>
                                            <Card.Link>
                                            <Button variant="danger" onClick={() => deleteUser(_id)}>Delete</Button>
                                        </Card.Link>
                                    </Card.Body>                                    
                                </Card>
                                </Col>
                            )
                        })
                    }
            </Row>
        </>
    )
}

export default Admin