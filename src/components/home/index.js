import React, { useState } from 'react'
import Slideshow from './slideshow'
import Paralax from './paralax'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

import CardDeck from 'react-bootstrap/CardDeck'
import { Jumbotron } from 'react-bootstrap'
 
const cardBack = {
    "background-color": "black",
}
const cardhead = {
    "background": "#149dc"
}
const gradientBack = {
    "background": "linear-gradient(#149dcc, transparent)"
}
const cardprops = {
    "color": "white"
}
//idk if im gonna even use this
const vidplayprops ={
    "position": "absolute", "z-index": "0", "width": "1419px", "height": "798px", "top": "0px", "left": "0px", "overflow": "hidden", "opacity": "1", "user-select": "none", "margin-top": "0px", "margin-left":" -88.5px", "max-width": "initial", "transition-property": "opacity", "transition-duration": "1000ms"
}
  
export default function Home() {

  
  
    return (
    <>
            <Slideshow></Slideshow>

            <div style = {cardBack}>
            <div class = "container">
            <div class = "row justify-content-md-center">
            <div class = "col ">
                <br></br>
                <CardDeck style = {cardprops}>
                <Card style = {gradientBack}>
                    <Card.Body >
                    <Card.Text>
                        <div style = {cardhead}>
                        <br></br>
                        <h3>When?</h3>
                        <br></br>
                        </div>
                        Saturday June 8th, 2019. Check in Begins 9:30 a.m. First Wave Begins at 10:30 a.m.

                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card style = {gradientBack}>
                    <Card.Body>
                    <Card.Text>
                            <h3>Where?</h3>  

                            The Run/Walk will begin at the Community Arts Center located at 721 Cranbury Road in East Brunswick.
                                Parking is available at this location. The Run/Walk will loop through Heavenly Farms.
                                Please see F.A.Q. page for Course Map.

                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card style = {gradientBack}>
                    <Card.Body>
                    <Card.Text>
                    <h3>Why?</h3>  
                                To Support Speed the Light. Speed the Light is an organization whose mission is to equip missionaries. 
                                They meet the Spiritual needs through Jesus Christ and the physical/emotional needs of numerous individuals.  
                                This year Speed the Light and World Serve will be partnering to build wells in Africa.  
                                The money raised will go to this purpose.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card style = {gradientBack}>
                    <Card.Body>
                    <h3>Who?</h3>  

                    <Card.Text>
                        Anyone can particpate in the Color Fun/Run Walk.  
                        Children under the age of 12 are required to be accompanied by a parent.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardDeck>
            </div>
            </div>
            </div>
            </div>

    {/* <div>
    <div class = "container">
    <div class = "row justify-content-md-center">
    <div class = "col ">
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
    
    </div> */}

    <Paralax></Paralax>
    {/* <iframe id="iframe_YTP_1578357502423" class="playerBox" style = {vidplayprops} frameborder="0" allowfullscreen="1" allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="640" height="360" src="https://www.youtube.com/embed/7_0GcEzuYeQ?modestbranding=1&amp;autoplay=0&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1&amp;version=3&amp;playerapiid=iframe_YTP_1578357502423&amp;origin=https%3A%2F%2Fcolorfunruneb.com&amp;allowfullscreen=true&amp;wmode=transparent&amp;iv_load_policy=3&amp;html5=1&amp;widgetid=1" unselectable="on"></iframe> */} 

    </>
    );
}


  