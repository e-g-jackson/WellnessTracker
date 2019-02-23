import React, { Component } from 'react';
import Header from "./assets/Header";
import Graph from "./assets/Graph";
import Body from "./assets/Body";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Graph />
        <Body />
      </div>
    );
  };
};

export default App;
