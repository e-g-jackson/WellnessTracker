import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/Header";
import Graph from "./components/Graph";
import Login from './components/Login';
import Profile from './components/Profile';
import Food from './components/Food';
import WeightSubmit from './components/WeightSubmit';
import Recipes from './components/Recipes';
import Navbar from './components/Navbar';
import FoodGraph from './components/FoodGraph';
import Bmi from './components/Bmi';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      userData: null
    }
  }
  authChanger(data){
    this.setState({
      isAuthenticated: true,
      userData: data
    })
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  render() {

    if(this.state.isAuthenticated === false){
      return(
        <Router>
          <div>
            <Navbar />
            <Header />
            <Login authorize = {(data)=>this.authChanger(data)} />
          </div>
        </Router>
      )
    }

    return (
      <Router>
        <div>
          <Navbar />
          <Header />

          <Route exact path = "/" render={() => {
            return(
              <Profile  
                id={this.state.userData}
              />
            )
            }}
          />

          <Route exact path="/profile" render={() => {
            return (
              <Profile  
                id={this.state.userData}
              />
            )
          }} />

          <Route exact path="/food" render={() => {
            return (
              <Food 
                id={this.state.userData}
              />
            )
          }} />

          <Route exact path="/types" render={() => {
            return (
              <FoodGraph  
                id={this.state.userData}
              />
            )
          }} />

          <Route exact path="/progress" render={() => {
            return (
              <Graph  
                id={this.state.userData}
              />
              )
          }} />

          <Route exact path="/weightsubmit" render={()=>{
            return(
              <WeightSubmit  
                id={this.state.userData}
              />
            )
          }}/>

          <Route exact path="/bmi" render={() => {
            return (
              <Bmi />
            )
            }} 
          />

          <Route exact path="/recipes" render={() => {
            return (
              <div>
                <Recipes  
                  id={this.state.userData}
                />
              </div>
            )
          }} />
        </div>

      </Router>
    );
  };
};

export default App;