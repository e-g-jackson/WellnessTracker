import React from "react";
import axios from "axios";
import SavedRecipes from "./SavedRecipes"
import Graph from "./Graph";
import WeightTable from "./WeightTable";
import PieChart from "./PieChart";
import DBResults from "./DBResults";
import {Animated} from "react-animated-css";


class Profile extends React.Component {
    state = {
        weightData: null
    }
    componentDidMount(){
        //GET Weight Data
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
                this.setState({weightData: newList});
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
                <div className = 'container bg-white'>
                    <div className = 'row'>
                        <h1 className = 'text-center py-2' style = {{backgroundColor:"rgb(170, 37, 37)", color:"#ffffff", width: "100%"}}>Welcome back {this.props.id.username}!</h1>
                    </div>
                    <br />
                    <br />
                    <div className = 'row'>
                        <div className = 'col-xs-12 col-md-6'>
                            <Graph 
                                data = {this.state.weightData}
                            />
                            <WeightTable 
                                id = {this.props.id} 
                            />
                        </div>

                        <div className = 'col-xs-12 col-md-6 py-3'>
                            <PieChart
                                id = {this.props.id}
                            />

                            <DBResults 
                                id = {this.props.id}
                            />

                            <SavedRecipes 
                                id = {this.props.id}
                            />

                        </div>
                    </div>
                </div>
            </Animated>

        );
    };
};

export default Profile;