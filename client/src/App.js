import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./assets/Header";
import Graph from "./assets/Graph";
import Body from "./assets/Body";
import Login from './assets/Login';
import Profile from './assets/Profile';
import Food from './assets/Food';
import Types from './assets/Types';
import Progress from './assets/Progress';
import Navbar from './assets/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Header />

          <Route exact path = "/login" render = {() => {
            return(
              <Login />
            )
          }}/>

          <Route exact path = "/profile" render = {() => {
            return(
              <Profile />
            )
          }}/>

          <Route exact path = "/food" render = {() => {
            return(
              <Food />
            )
          }}/>

          <Route exact path = "/types" render = {() => {
            return(
              <Types />
            )
          }}/>

          <Route exact path = "/progress" render = {() => {
            return(
              <Progress />
            )
          }}/>

          <Route exact path = "/graph" render = {() => {
            return(
              <div>
                <Graph />
                <Body />
              </div>
            )
          }} />
        </div>
      </Router>
    );
  };
};

export default App;