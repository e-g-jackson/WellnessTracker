import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/Header";
// import Graph from "./assets/Graph";
// import Body from "./assets/Body";
import './App.css';
// import Login from './assets/Login';
// import Profile from './assets/Profile';
// import Food from './assets/Food';
// import Types from './assets/Types';
//import Progress from './components/Progress';
//import Navbar from './components/Navbar';
import Login from "./components/Login";
import Route from "./components/AppliedRoutes";
import NoMatch from "./components/NoMatch";

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
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return (
      <Router>

      
        <div>
        
          {/* <Navbar />*/}
          <Header />
          {/* <Route childProps={childProps} /> */}
          <Switch>
            <Route exact path="/" component={Login} props={childProps} />
            <Route exact path="/login" component={Login} props={childProps} />
            <Route component={NoMatch} />
          </Switch>;

      </div>
      </Router>
    );
  };
};

export default App;
