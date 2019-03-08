import React from 'react';
import axios from 'axios';
// var input = 'pizza'

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
    }
}
class Recipes extends React.Component {
    state = {
        recipes: "",
        input: "pizza"
    }

    componentDidMount(){
        this.getData();
    }

    getData(){
        let recipes = [];
        axios.get('https://www.food2fork.com/api/search?key=' + key + '&q=' + this.state.input)
            .then((response) => {
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
                                    Recipe Id: {x.recipe_id}
                                    Link: <a href = {x.source_url}>{x.source_url}</a>
                                </p>
                            </div>
                        </div>
                    );
                });

                recipes.push(divs);

                this.setState({
                    "recipes": recipes[0]
                })
            }).catch(function(error){throw error});
    }
    render(){
        console.log(this.state)
        if (this.state.recipes === "") {
            return(
                <h3>Waiting for recipes...</h3>
            )
        } else {
            return(
                <div>
                    <div>
                    <input 
                        onChange = {
                            (event) =>{this.setState({input: event.target.value})}
                        }
                    />
                    <button
                        onClick = {this.getData()}
                    >Submit</button>
                    </div>
                    <div className = 'container'>
                        <h1>Hello World!</h1>
                        {this.state.recipes}
                    </div>
                </div>
            )
        }
    }
}

export default Recipes;