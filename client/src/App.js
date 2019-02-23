import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./assets/Header";
// import Graph from "./assets/Graph";
// import Body from "./assets/Body";
import './App.css';
// import Login from './assets/Login';
// import Profile from './assets/Profile';
// import Food from './assets/Food';
// import Types from './assets/Types';
// import Progress from './assets/Progress';
import Navbar from './assets/Navbar';
import Login from "./containers/Login";
import AppliedRoute from "./components/AppliedRoute";
import NoMatch from "./components/NoMatch";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return (
      <div>
        
          <Navbar />
          <Header />
          {/* <Routes childProps={childProps} /> */}
          <Switch>
            <AppliedRoute path="/" exact component={Login} props={childProps} />
            <AppliedRoute path="/login" exact component={Login} props={childProps} />
            <AppliedRoute component={NoMatch} />
          </Switch>;

        
      </div>
    );
  };
};

export default App;
