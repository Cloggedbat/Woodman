import React from 'react';
import {
    Container,
    Jumbotron,
    Col,
    Row,
    Card,
    Button
} from "react-bootstrap";
import FiremapD from '../Components/fireMap'
import './home.css'
// un used images
import campFireHeroShot from '../assets/243208-800x515r1-types-campfires.webp'
import arches from '../assets/arches.jpg'
import cLand from '../assets/cLands.jpg'
// import HeroSlider from '../components/Navbar/swiper/myIMG';
// import ressi from '../assets/resume.PNG'
/// import Swiper from 'react-id-swiper';

// custom css






const FireMapPage = () => {


    return (
        <>


            <Container id="main-container">
                <Row>
                    <Col xs={12} md={8}>
                        <Card className="mapCard">
                            <h1 className="gotWood text-center">Got Wood</h1>
                            <hr />
                            <FiremapD />
                        </Card>

                        {/* <br /> */}



                        <Jumbotron className="jumbotron1">
                            <h1>This can display data iq guess</h1>
                            <hr />
                        </Jumbotron>
                    </Col>
                    <Col xs={6} md={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="campFireHeroShot" src={campFireHeroShot} />
                            <Card.Body>
                                <Card.Title>Find out your local fire danger</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="campFireHeroShot" src={arches} />
                            <Card.Body>
                                <Card.Title>Take me to Arches</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="campFireHeroShot" src={cLand} style={{ width: '18rem' }} />
                            <Card.Body>
                                <Card.Title>Take me to CLands</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>


                </Row>


            </Container>

        </>
    );
};
const styles = {
    navBar: {
        marginTop: '50vw',
        height: '50vw',
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemStyle: {
        flex: 1,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1
    }
}

export default FireMapPage;
