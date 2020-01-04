import React, { useState } from 'react';
import Slideshow from './slideshow'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

import CardDeck from 'react-bootstrap/CardDeck'
import { Jumbotron } from 'react-bootstrap';
 
  
export default function Home() {

  
  
    return (
    <>
            <Slideshow></Slideshow>
            <div class = "container">
            <div class = "row justify-content-md-center">
            <div class = "col ">

   
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
                <Card.Header>Where?</Card.Header>  
                    <Card.Body>
                    <Card.Text>
                            The Run/Walk will begin at the Community Arts Center located at 721 Cranbury Road in East Brunswick.
                                Parking is available at this location. The Run/Walk will loop through Heavenly Farms.
                                Please see F.A.Q. page for Course Map.

                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                <Card.Header>Why?</Card.Header>  
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
    </div>
    </div>
    </div>

    </>
    );
}


  