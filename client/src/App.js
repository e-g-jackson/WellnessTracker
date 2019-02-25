import React, { Component } from 'react';
import Header from "./assets/Header";
import Graph from "./assets/Graph";
import Body from "./assets/Body";
import Login from './assets/Login';
import Profile from './assets/Profile';
import Food from './assets/Food';
import Types from './assets/Types';
import Progress from './assets/Progress';
import Navbar from './assets/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Food />

        </div>
    );
  };
};

export default App;
