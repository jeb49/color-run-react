import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
 
  
export default function Home() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
  
    return (
    <>
            {/* <h2>Home</h2> */}
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={require("../images/one.jpg")}
        alt="First slide"
        />
        <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={require("../images/two.jpg")}
        alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={require("../images/three.jpg")}
        alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
            <br></br>
                <CardDeck>
                <Card>
                <Card.Header>When?</Card.Header>  
                    <Card.Body>
                    <Card.Text>
                        Saturday June 8th, 2019. Check in Begins 9:30 a.m. First Wave Begins at 10:30 a.m.

                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                <Card.Header>Hey!</Card.Header>  
                    <Card.Body>
                    <Card.Text>
                            The Run/Walk will begin at the Community Arts Center located at 721 Cranbury Road in East Brunswick.
                                Parking is available at this location. The Run/Walk will loop through Heavenly Farms.
                                Please see F.A.Q. page for Course Map.

                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                <Card.Header>Hey!</Card.Header>  
                    <Card.Body>
                    <Card.Text>
                                To Support Speed the Light. Speed the Light is an organization whose mission is to equip missionaries. 
                                They meet the Spiritual needs through Jesus Christ and the physical/emotional needs of numerous individuals.  
                                This year Speed the Light and World Serve will be partnering to build wells in Africa.  
                                The money raised will go to this purpose.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                <Card.Header>Who?</Card.Header>  
                    <Card.Body>
                    <Card.Text>
                        Anyone can particpate in the Color Fun/Run Walk.  
                        Children under the age of 12 are required to be accompanied by a parent.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <br></br>
                <br></br>
                </CardDeck>
                <br></br>
                <br></br>
                <h2>NEW THIS YEAR</h2>

    <CardDeck>
    <Card>
    <Card.Header>Station Challenges</Card.Header>  
        <Card.Body>
        <Card.Text>
        At some of the stations this year there will be special challenges (optional) you can complete before moving on.


        </Card.Text>
        </Card.Body>
    </Card>
    <Card>
    <Card.Header>DUNK TANK</Card.Header>  
        <Card.Body>
        <Card.Text>
                The Run/Walk will begin at the Community Arts Center located at 721 Cranbury Road in East Brunswick.
                    Parking is available at this location. The Run/Walk will loop through Heavenly Farms.
                    Please see F.A.Q. page for Course Map.

        </Card.Text>
        </Card.Body>
    </Card>
    <Card>
    <Card.Header>Free Games</Card.Header>  
        <Card.Body>
        <Card.Text>
        Hang out after the run to play some free carnival games.

    </Card.Text>
        </Card.Body>
    </Card>

    </CardDeck>
    </>
    );
}


  