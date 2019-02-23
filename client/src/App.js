import React, { Component } from 'react';
import Header from "./assets/Header";
import Body from "./assets/Body"
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  };
};

export default App;
