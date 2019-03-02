import React from "react";
import axios from "axios";
import Graph from "./Graph"
// import helper from "../../../routes/dataHelper"
// import $ from "jquery";

class Food extends React.Component {
    state = {
        weight: ""
    }

    handleClickEvent(e){
        e.preventDefault();
        const data = this.state;
        console.log(data);

        axios.post("/db/weight", data)
            .then((response)=>{
                console.log(response)
            }).catch((error) => {throw error})
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                    <h2>Daily Weight Tracker</h2>
                    <h3>Current Date</h3>
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit = {(event) => this.handleClickEvent(event)}>
                                    <div className="form-group">
                                        <label>Enter new weight, and then click submit.</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="foodName" 
                                            aria-describedby="food" 
                                            placeholder="Enter weight"
                                            onChange = {(event) =>{
                                                console.log(event.target.value);
                                                this.setState({
                                                    weight: event.target.value
                                                });
                                            }}/>
                                    </div>
                                    <br/>
                                    <br/>
                                    <button 
                                        type="submit" 
                                        className="btn btn-secondary" 
                                        >Save
                                    </button>
                                </form>
                            </div>
                        </div>
                        <br/>
                        <div className="card">
                            <div className="card-body">
                               <Graph />
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