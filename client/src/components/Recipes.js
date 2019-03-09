import React from 'react';
import axios from 'axios';

var key = F2F_KEY;

const style = {
    header:{
        backgroundColor: "rgb(170, 37, 37)",
        color: "white"
    },
    image:{
        height: "200px",
        width: "auto"
    },
    body:{
        backgroundColor: "white"
    },
    text:{
        color: "rgb(170, 37, 37)"
    }
}
class Recipes extends React.Component {
    state = {
        dataHasLoaded: false,
        recipes: "",
        input: ""
    }

    componentDidMount(){
    }

    getData(){
        let recipes = [];
        axios.get('https://www.food2fork.com/api/search?key=' + key + '&q=' + this.state.input)
            .then((response) => {
                console.log(response)
                var divs = response.data.recipes.map((x) => {
                    console.log(x);
                    return(
                        <div key = {x.recipe_id} className = 'row mb-4' style = {style.body}>
                            <img className = 'col-4 img-fluid' src = {x.image_url} alt = {x.title} style = {style.image} />
                            <div className = 'col-8'>
                                <a href = {x.source_url}>
                                    <h2 style = {style.header}>
                                        {x.title}
                                    </h2>
                                </a>
                                <p>
                                    <em>Published By: <a href = {x.publisher_url}>{x.publisher}</a></em>
                                </p>
                                <p>
                                    Recipe Id: {x.recipe_id}
                                </p>
                                <p> 
                                    Link: <a href = {x.source_url}>{x.source_url}</a>
                                </p>
                            </div>
                        </div>
                    );
                });

                recipes.push(divs);

                this.setState({
                    "dataHasLoaded": true,
                    "recipes": recipes[0]
                })
            }).catch(function(error){throw error});
    }
    render(){
        console.log(this.state)
        if (this.state.recipes === "") {
            return(
                <div className = 'container bg-white py-3 px-5'>
                    <div clasName = 'row'>
                        <input 
                            className = 'form-input mx-2'
                            onChange = {
                                (event) => {this.setState({input: event.target.value})}
                            }
                        />
                        <button
                            className = 'btn btn-danger mx-3'
                            onClick = {() => {this.getData()}}
                            >Submit
                        </button>
                    </div>
                    <div>
                        <h3 style = {style.text}>Enter a value into the search bar and click submit to find new recipes!</h3>
                    </div>
                </div>
            )
        } else {
            return(
                <div div className = 'container bg-white py-3 px-5'>
                    <div>
                    <input 
                        onChange = {
                            (event) => {this.setState({input: event.target.value})}
                        }
                    />
                    <button
                        onClick = {() => {this.getData()}}
                    >Submit</button>
                    </div>
                    <div className = 'container'>
                        <h1 style = {style.text}>Recipe Results:</h1>
                        {this.state.recipes}
                    </div>
                </div>
            )
        }
    }
}

export default Recipes;