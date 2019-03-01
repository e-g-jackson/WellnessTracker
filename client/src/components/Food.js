import React from "react";
import axios from "axios";
// import helper from "../../../routes/dataHelper"
// import $ from "jquery";

class Food extends React.Component {
    state = {
        foodName: "",
        meal: "Breakfast",
        foodType: "Protein"
    }

    handleClickEvent(e){
        e.preventDefault();
        const data = this.state;
        console.log(data);

        // $.post("http://localhost:3001/db/food", data, (response) => {
        //     console.log(response);
        // })

        // fetch('http://localhost:3001/db/food', {
        //     method: 'POST',
        //     body: data
        // }).catch(err => {throw err})
        // const helper = () => axios.get()
        
        const production  = 'https://wellness-tracker-app.herokuapp.com/';
        const development = 'http://localhost:3001/';
        var url;
        
        if (process.env.NODE_ENV === "production"){
            url = production;
        } else if (process.env.NODE_ENV === "development"){
            url = development;
        }

        console.log('process.env.NODE_ENV = ' + process.env.NODE_ENV)
        axios.defaults.baseURL =  url;

        axios.post("/db/food", data)
            .then((response)=>{
                console.log(response)
            }).catch((error) => {throw error;})
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
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
                                    <br/>
                                    <br/>
                                    <button 
                                        type="submit" 
                                        className="btn btn-secondary" 
                                        // onClick = {() => {
                                        //     this.handleClickEvent();
                                        // }}>
                                        >
                                        Save
                                    </button>
                                </form>
                            </div>
                        </div>
                        <br/>
                        <div className="card">
                            <div className="card-body">
                               DISPLAY DATABASE HERE
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        );
    };
};

export default Food;