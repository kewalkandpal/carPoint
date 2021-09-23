import React from "react";
import './App.css';
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Appointment from "./Appointment";
import {  HashRouter as Router, Switch, Route,} from "react-router-dom";

function App() {
  return (
    <>
  <Router>
  <Navbar />
  <Switch>
    <Route exact path="/" component={LandingPage}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/service" component={Service}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/appointment" component={Appointment}/>
  </Switch>
  </Router>
  </>
  )
}

export default App;
