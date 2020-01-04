import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
export default function Faq() {
    return (
        <>  
        <div class = "container">
            <div class = "row justify-content-md-center">
            <div class = "col ">
                <h2>Frequnetly Asked Questions</h2>
            </div>
            </div>
            <div>
            <Accordion defaultActiveKey="0">
                <Card class = "col col-lg-2">
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    When and where?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>This year’s Color Fun Run will start at the Community Arts Center in East Brunswick on June 8th, 2018. The address to the Community Arts Center is 721 Cranbury Road, East Brunswick N.J. Parking is available at this site. Please do not park at Heavenly Farms. Participants will run/walk through a course that loops through Heavenly Farms and concludes back at the Community Arts Center.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card class = "col col-lg-2">
                    <Accordion.Toggle as={Card.Header} eventKey="2"> What is the course like? </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <p>The course is about 2.5 miles and participants may walk or run the course. As a Fun Run/Walk this is an untimed event and is less about mile times and more about having fun.</p>
                            <p>There will be six color stations throughout the course as well as one water station about halfway through. Some of the stations will also include an optional challenge to complete before moving on.  Of course there will be a water station at the starting/finish line! Port-a-Johns are located at the starting/finish line.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card class = "col">
                    <Accordion.Toggle as={Card.Header} eventKey="3"> What time should I arrive? </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            <p>Race time is 10:30a.m.  Check-in will open at 9:30a.m. We recommend arriving at the latest by 10a.m. to check in. Right now we will only have one wave. If registrations warrants, we will have a second wave starting shortly after the 10:30a.m. wave.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card class = "col col-lg-2">
                    <Accordion.Toggle as={Card.Header} eventKey="4"> What is the course like? </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>
                            <p>Early Registration is $27 by May 27th. Standard Registration $30 May 28th to Race Day. Please Note: T-Shirts and Personal Color Packets are not guaranteed to those registering after May 27th.</p>
                            <p>There is no cost for spectators.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="5"> Are there any age restrictions? </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body>
                            <p>The Color Fun Run/Walk is open to all Ages. Children under age 12 will need to be accompanied by a parent/guardian. Each participant will be required to complete a waiver during the registration process.  A parent may complete the waiver for their child.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="6"> What is the course like? </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                        <Card.Body>
                            <p>
                                We are excited to announce that this year following the fun run/walk there will be several activities to engage in. There will be free carnival games for kids.  There is will also be food available for purchase.
                            </p>
                            <p>
                                If you would like to have a table to sell a product or you are a food vendor please fill out this form and we will be in touch.
                            </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="7"> Are there any age restrictions? </Accordion.Toggle>
                    <Accordion.Collapse eventKey="7">
                        <Card.Body>
                            <p>
                                Each participant is responsible for the safeguarding of their valuables such as cell phones, car keys, etc. Please make arrangement for these items prior to the race. Sunglasses are not provided but participants may want to wear them or goggles to protect their eyes. All powder is FDA approved but it is a good idea to keep the powder out of your eyes. Don't forget to bring a change of clothes for the ride home.
                            </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </div>
            </div>
        </>
    );

}


  