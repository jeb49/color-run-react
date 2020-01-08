import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Faq from './components/faq';
// import Register from './components/register';
import Contact from './components/contact';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Footer from './components/footer';

export default function App() {
  return (
    <>
    <body>
    <Router>
      <div >
      <Navbar style ={{background: "#333333", position: "sticky"}} variant="dark"  >
            <Nav.Link href="/" style = {{color: "white"}}>
              <img src = {require('./components/images/logo.jpg')} style = {{height: "3.8rem"}} ></img> 
              <b>Color Fun Run</b>
            </Nav.Link>
            <Nav activeKey="/" >   
             <Nav.Item>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/faq">F.A.Q</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item >
              <Nav.Link href="/register" class="p-2">Register</Nav.Link>
            </Nav.Item>
        </Nav>
        </Navbar>



        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
    <Footer>
    </Footer>
    </body>
    </>
  );
}



