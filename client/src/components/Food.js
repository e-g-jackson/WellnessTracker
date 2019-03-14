import React from "react";
import axios from "axios";
import DBResults from "./DBResults";
import PieChart from "./PieChart";
import { Animated } from "react-animated-css";

class Food extends React.Component {
    state = {
        foodName: "",
        meal: "Breakfast",
        foodType: "Protein",
        portion: "1",
        userId: this.props.id._id
    }

    handleClickEvent(e){
        e.preventDefault();
        const data = this.state;

        axios.post("/db/food", data)
            .then((response)=>{
                console.log(response)
            }).catch((error) => {throw error})
    }
    
    render() {
        return (
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <div className="container">
                <div className="row">
                    {/* <div className="col-md-2"></div> */}
                    <div className="col-md-12">
                    <h2>Daily Food Tracker</h2>
                    <h3>Current Date</h3>
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit = {(event) => this.handleClickEvent(event)}>
                                    <div className="form-group">
                                        <label>Food:</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="foodName" 
                                            aria-describedby="food" 
                                            placeholder="Enter Food"
                                            onChange = {(event) =>{
                                                console.log(event.target.value);
                                                this.setState({
                                                    foodName: event.target.value
                                                });
                                            }}/>
                                    </div>
                                    <select 
                                        name="meal" 
                                        className = "mx-3" 
                                        id = "meal" 
                                        size="4"
                                        onChange = {(event) => {
                                            console.log(event.target.value);
                                            this.setState({
                                                meal: event.target.value
                                            });
                                        }}>
                                        <option value="Breakfast">Breakfast</option>
                                        <option value="Lunch">Lunch</option>
                                        <option value="Snack">Snack</option>
                                        <option value="Dinner">Dinner</option>
                                    </select>
                                    <select 
                                        name="foodType" 
                                        className = "mx-3" 
                                        id = "foodType" 
                                        size="4"
                                        onChange = {(event) =>{
                                            console.log(event.target.value);
                                            this.setState({
                                                foodType: event.target.value
                                            });
                                        }}>
                                        <option value="Protein">Protein</option>
                                        <option value="Carb">Carb</option>
                                        <option value="Fruit">Fruit</option>
                                        <option value="Vegetable">Vegetable</option>
                                    </select>
                                    <select 
                                        name="poriton" 
                                        className = "mx-3" 
                                        id = "portion" 
                                        size="4"
                                        onChange = {(event) => {
                                            console.log(event.target.value);
                                            this.setState({
                                                portion: event.target.value
                                            });
                                        }}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                    <br/>
                                    <br/>
                                    <button 
                                        type="submit" 
                                        className="btn btn-secondary" 
                                        >
                                        Save
                                    </button>
                                </form>
                            </div>
                        </div>
                        <br/>
                        <div className="card mb-4">
                            <div className="card-body">
                               <PieChart 
                                    id={this.props.id}
                                />
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                               <DBResults 
                                    id={this.props.id}
                                />
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-md-2"></div> */}
                </div>
            </div>
            </Animated>
        );
    };
};

export default Food;