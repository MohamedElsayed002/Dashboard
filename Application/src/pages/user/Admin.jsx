import { useEffect, useState } from "react"
import { useAppContext } from "../../context/context"
import Loading from '../../Components/Loading'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';


import { NavLink, useSearchParams } from "react-router-dom";

const Admin = () => {

    const {fetchUsers , users , deleteUser}  = useAppContext()
    const [search,setSearching] = useState('')


    let lengthUsers = users.length
    
    useEffect(() => {
        fetchUsers(search)
    },[search,lengthUsers])





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
            <Row className="m-5 text-center d-flex">
                {
                    users.map((user) => {
                        const {name,email,role,_id} = user
                        return (
                            <Col key={_id}  className="my-2 ">
                                <Card style={{width : '18rem'}}>
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