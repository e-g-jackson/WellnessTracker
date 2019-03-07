import React from "react";
import axios from "axios";
import Graph from "./Graph";
import {Animated} from "react-animated-css";

class Food extends React.Component {
    // state = {
    //     weight: "",
    //     data: ""
    // }
    constructor(props) {
        super(props);
        this.state = {
            weight: undefined,
            data: undefined
        };
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
                    const format = data[i].createdAt.split("T")
                    const newData = {
                        label: format[0],
                        value: data[i].weight
                    };
                    newList.push(newData);
                }
                console.log('newList from WS:')
                console.log(newList)
                this.setState({data: newList});
                console.log('this.state from WS:')
                console.log(this.state)
            }).catch(error => {
                console.log(error);
            })
    }
    
    render() {
        return (
            <Animated animationIn="fadeIn" isVisible={true}>
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
                                            id="weight" 
                                            aria-describedby="weight" 
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
            </Animated>
        );
    };
};

export default Food;