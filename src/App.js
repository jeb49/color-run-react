import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Faq from './components/faq';
import Register from './components/register';
import Contact from './components/contact';
import Footer from './components/footer';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

export default function App() {
  return (
    <>
    <body>
    <Router>


        <nav class="navbar navbar-expand-lg navbar-dark " style ={{background: "#333333", position: "sticky", display: "flex"}}>
          <a class="navbar-brand" href="/"><img src = {require('./components/images/logo.jpg')} style = {{height: "3.8rem"}} ></img><b>Color Fun Run</b></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/faq">F.A.Q</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact" tabindex="-1">Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/register" tabindex="-1">Register</a>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/register">
            <Register />
          </Route> 
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

    </Router>
    <Footer>
    </Footer>
    </body>
    </>
  );
}



