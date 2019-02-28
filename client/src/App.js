import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/Header";
import Graph from "./components/Graph";
import Login from './components/Login';
import Profile from './components/Profile';
import Food from './components/Food';
import Types from './components/Types';
import Progress from './components/Progress';
import Navbar from './components/Navbar';
// import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    }
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }
  render() {
    // const childProps = {
    //   isAuthenticated: this.state.isAuthenticated,
    //   userHasAuthenticated: this.userHasAuthenticated
    // };
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
              </div>
            )
          }} />
        </div>
        
      </Router>
    );
  };
};

export default App;