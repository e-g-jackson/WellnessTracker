import React from "react";
import axios from "axios";
import Graph from "./Graph"

class Food extends React.Component {
    state = {
        weight: "",
        data: ""
    }

    componentDidMount(){
        this.getData();
    }

    handleClickEvent(e){
        e.preventDefault();
        const data = {weight: this.state.weight};
        console.log('Submitting the following')
        console.log(data);

        axios.post("/db/weight", data)
            .then((response) => {
                console.log(response)
                this.getData();
            }).catch((error) => {throw error})
    }

    getData(){
        axios.get("/db/getweights")
            .then(response => {
                const data = response.data;
                const newList = [];
                for (var i = 0; i < data.length; i++){
                    const newData = {
                        label: data[i].createdAt,
                        value: data[i].weight
                    };
                    newList.push(newData);
                }
                console.log(newList)
                this.setState({data: newList});
                console.log(this.state)
            }).catch(error => {
                console.log(error);
            })
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
                               <Graph 
                               data = {this.state.data} 
                               />
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