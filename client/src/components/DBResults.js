import React from "react";
import $ from "jquery";
import {Animated} from "react-animated-css";

class DBResults extends React.Component {
    state = {results: ""};

    componentDidMount(){
        $.get("/db/getFoods", (res) => {
           console.log(res) 
        })
    }

    render(){
        return(
            <Animated animationIn="fadeIn" isVisible={true}>
            <h1>DATABASE RESULTS HERE</h1>
            </Animated>
        )
    }
}

export default DBResults;