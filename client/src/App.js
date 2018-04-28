import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./components/home/Home";
import Saved from "./components/saved/Saved";
import { Container } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return <Router>
        <Container className="app-wrapper">
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
        </Container>
      </Router>;
  }
}

export default App;
