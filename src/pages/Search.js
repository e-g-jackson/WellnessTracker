import React, { Component } from "react";
import API from "../utils/API";
import SearchResults from "../components/SearchResults";

class Search extends Component {
    state = {
        food: "grapes",
        results: [],
    }

    componentDidMount() {
        console.log("DID IT WORK", this.state.food);
        API.getFoodInfo(this.state.food)

            .then((res) => { 
                console.log("TEST", res);
               this.setState({ results: res.calories });
            console.log("HELP", this.state.results);
            })
            
            .catch((err) => {console.log(err);});
    };
    
    render() {
        return (
            <SearchResults results={this.state.results} />
        );
    }
    }
    export default Search;
