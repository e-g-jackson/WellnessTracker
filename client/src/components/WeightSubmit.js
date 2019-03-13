import React from "react";
import axios from "axios";
import Graph from "./Graph";
import {Animated} from "react-animated-css";

class Food extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weight: undefined,
            data: undefined,
            toggle: false
        };
    }

    componentDidMount(){
        this.getData();
    }
    
    componentDidUpdate(){
        this.getData();
    }

    handleClickEvent(e){
        e.preventDefault();
        const data = {
            weight: this.state.weight,
            userId: this.props.id._id
        };

        axios.post("/db/weight", data)
            .then((response) => {
                this.getData();
                setTimeout(()=>{this.forceUpdate();},250)
            }).catch((error) => {throw error})
        this.toggle()
    }
    toggle (){
        if(!this.state.toggle){
            console.log(this.state.toggle)
            this.setState({toggle: true})
        } else {
            console.log(this.state.toggle);
            this.setState({toggle: false})
        }

    }

    getData(){
        axios.get("/db/getweights/" + this.props.id._id)
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
                if(newList !== this.state.data){
                this.setState({data: newList});
                } else {
                    alert('Same Data');
                }
            }).catch(error => {
                throw error;
            })
    }
    
    render() {
        return (
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <div className="container">
                <div className="row">
                    {/* <div className="col-md-3"></div> */}
                    <div className="col-md-12">
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
                    {/* <div className="col-md-3"></div> */}
                </div>
            </div>
            </Animated>
        );
    };
};

export default Food;