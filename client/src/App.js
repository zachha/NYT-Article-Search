import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Saved from "./pages/saved/Saved";
import { Container } from 'reactstrap';
import './App.css';
import TopNav from "./components/topnav/TopNav";

export default class App extends Component {
  render() {
    return <Router>
            <Container className="app-wrapper">
              <TopNav />
              <Route exact path="/" component={Home} />
              <Route exact path="/saved" component={Saved} />
            </Container>
          </Router>;
  }
}

