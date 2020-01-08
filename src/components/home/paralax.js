import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import './paralax.css'
class Paralax extends React.Component {
    constructor() {
        super();        
        this.state = {
          offset: 0
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.parallaxShift);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.parallaxShift);
    }
    parallaxShift = () => {
        this.setState({
          offset: window.pageYOffset
        });
    };
    
    render(){
        const background = {

            backgroundPositionY: this.state.offset
          };
      
          return (

            <header style={background} class="para jumbotron-fluid ">
                <section
                  style={{ bottom: this.state.offset }}
                  className="header-frame"
                >

            <div class = "container-fluid">
            <div class = "col">   

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

            </section>
            </header>

          );
      
    }
}

export default Paralax;