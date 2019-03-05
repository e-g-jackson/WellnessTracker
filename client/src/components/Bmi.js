import React, { Component } from 'react'
import './Bmi.css'
import Range from './Range';
import Result from './Result';

class Bmi extends Component {
  constructor(props){
    super(props); 
    this.state = {
      height: 57,
      weight: 73, 
      bmi: 22.49, 
      bmiClass: 'Normal'
    }
  }

  heightChange = (height) => {
    this.setState({ height: height}, this.setBmi ); 
  }

  weightChange = (weight) => {
    this.setState({ weight: weight }, this.setBmi ); 
  }

  setBmi = () => {
    let bmi = ((this.state.weight / (this.state.height * this.state.height)) * 703).toFixed(2); 
    this.setState({ bmi: bmi, bmiClass: this.getBmiClass(bmi) }); 
  }

  getBmiClass = (bmi) => {
    if(bmi < 18.5) return 'Underweight'; 
    if(bmi >= 18.5 && bmi <= 24.9) return 'Normal'; 
    if(bmi >= 25 && bmi <= 29.9) return 'Overweight'; 
    if(bmi >= 30) return 'Obese';  
  }

  render() {
    return (
      <div className="Bmi">
        <h1>Calculate Your BMI</h1>
        <form>
          <div>
            <label>Height</label>
            <Range 
              min={0}
              max={100}
              value={this.state.height} 
              onChange={this.heightChange} />
          </div>
          <div>
            <label>Weight</label>
            <Range 
              value={this.state.weight}
              onChange={this.weightChange} />
          </div>
        </form>
        <Result data={this.state}/>
      </div>
    );
  }
}

export default Bmi