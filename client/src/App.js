import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./assets/Header";
import Graph from "./assets/Graph";
import Body from "./assets/Body";
import './App.css';
// import Login from './assets/Login';
// import Profile from './assets/Profile';
// import Food from './assets/Food';
// import Types from './assets/Types';
// import Progress from './assets/Progress';
import Navbar from './assets/Navbar';

class App extends Component {
  render() {
    return (
      <Router>

        <Navbar />
        <Header />

        <Route path = "/graph" render = {() => {
          return(
            <div>
              <Graph />
              <Body />
            </div>
          )
        }}>
        </Route>
        

        </Router>
    );
  };
};

export default App;