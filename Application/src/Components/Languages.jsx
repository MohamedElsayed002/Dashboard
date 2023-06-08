
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Languages = () => {
    return (
        <>
             <h1 className="my-5 text-center">Languages</h1>
            <div className="container text-center">
                <Row>
                    <Col className="my-3">
                    <Card style={{width : '18rem' , margin : '0 auto'}}>
                        <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/732/732212.png" />
                        <Card.Body>
                            <Card.Title>HTML</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                    <Button variant="primary" href="https://www.w3schools.com/html">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col className="my-3">
                    <Card style={{width : '18rem' , margin : '0 auto'}}>
                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png" />
                        <Card.Body>
                            <Card.Title>JavaScript</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                    <Button variant="primary" href="https://www.w3schools.com/js/">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col className="my-3">
                    <Card style={{width : '18rem' , margin : '0 auto'}}>
                        <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/919/919826.png" />
                        <Card.Body>
                            <Card.Title>CSS</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                    <Button variant="primary" href="https://www.w3schools.com/css/">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="my-3">
                    <Card style={{width : '18rem' , margin : '0 auto'}}>
                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
                        <Card.Body>
                            <Card.Title>React JS</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                    <Button variant="primary" href="https://react.dev/">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col className="my-3">
                    <Card style={{width : '18rem' , margin : '0 auto'}}>
                        <Card.Img variant="top" src="https://www.svgrepo.com/download/376337/node-js.svg" />
                        <Card.Body>
                            <Card.Title>Node JS</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                    <Button variant="primary" href="https://nodejs.org/en">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col className="my-3">
                    <Card style={{width : '18rem' , margin : '0 auto'}}>
                        <Card.Img variant="top" src="data:image/png;base64,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" />
                        <Card.Body>
                            <Card.Title>Express JS</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                    <Button variant="primary" href="https://expressjs.com/">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
                
            </div>
        </>
    )
}

export default Languages