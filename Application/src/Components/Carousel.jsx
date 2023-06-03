import Carousel from 'react-bootstrap/Carousel';




const CarouselComp = () => {
    return (
        <>
        <Carousel fade>
                <Carousel.Item>
                    <img src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                        className="d-block w-100"
                        alt="First slide"
                        style={{height : '500px ' , objectFit : 'cover'}}
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
                        className="d-block w-100"
                        alt="First slide"
                        style={{height : '500px ' , objectFit : 'cover'}}
                    />
                    <Carousel.Caption>
                        <h3>Second  slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                                <Carousel.Item>
                    <img src="https://scontent.fcai21-4.fna.fbcdn.net/v/t1.6435-9/60158872_425879081293380_3733202835156762624_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=19026a&_nc_ohc=WZfMJ7wb5FkAX9sc3iI&_nc_ht=scontent.fcai21-4.fna&oh=00_AfDnCxB0OT66-6MEw06zyYVXcsh40vdSEN5NfEAcWg5JMw&oe=64A28A88"
                        className="d-block w-100"
                        alt="First slide"
                        style={{height : '500px ' , objectFit : 'cover'}}
                    />
                    <Carousel.Caption>
                        <h3>it's me </h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarouselComp