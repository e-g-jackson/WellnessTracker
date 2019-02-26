import React, { Component } from 'react'

class Result extends Component {
  // convert cm into ft 
  toFeet = (num) => {
    let realFeet = ((num * 0.393700) / 12); 
    let feet = Math.floor(realFeet); 
    let inches = Math.round((realFeet - feet) * 12); 
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
    );
  }
}

export default Result