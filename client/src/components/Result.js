import React, { Component } from 'react'
import {Animated} from "react-animated-css";

class Result extends Component {
  // convert cm into ft 
  toFeet = (num) => {
    let realFeet = ((num) / 12); 
    let feet = Math.floor(realFeet); 
    let inches = Math.round(num % 12); 
    return `${feet}'${inches}`; 
  }
  // convert lbs to kg
  toLbs = (num) => {
    let nearExact = num/2.20462; 
    let kg = Math.floor(nearExact); 
    return kg; 
  }

  render() {
    let height = this.props.data.height; 
    let weight = this.props.data.weight; 
    let bmi = this.props.data.bmi; 
    let bmiClass = this.props.data.bmiClass; 
    // conversions
    let heightFeet = this.toFeet(height); 
    let pounds = this.toLbs(weight); 

    return (
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
      <div className="result">
        <h3>
          {heightFeet} ft
          <span className="imperial"> {height}</span>
        </h3>
        <h3>
          {weight}lbs
          <span className="imperial"> {pounds}kg</span>  
        </h3>
        <h3>{bmi}</h3>
        <h3>{bmiClass}</h3>
      </div>
      </Animated>
    );
  }
}

export default Result