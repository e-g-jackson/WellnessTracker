import React from "react";
import $ from "jquery";

class DBResults extends React.Component {
    state = {results: ""};

    componentDidMount(){
        $.get("/db/getFoods", (res) => {
           console.log(res) 
        })
    }

    render(){
        return(
            <h1>DATABASE RESULTS HERE</h1>
        )
    }
}

export default DBResults;