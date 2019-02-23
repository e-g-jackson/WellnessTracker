import React, { Component } from 'react';
import Header from "./assets/Header";
import Body from "./assets/Body"
import './App.css';
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
      </div>
    );
  };
};

export default App;
