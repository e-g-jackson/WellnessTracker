import React from 'react';
import axios from 'axios';
import SavedRecipes from './SavedRecipes'
import { Animated } from "react-animated-css";

var key = '30e77a591ab3a009323f28be315be367';
// key = F2F_KEY;

const style = {
    header:{
        backgroundColor: "rgb(170, 37, 37)",
        color: "white",
        width: "100%"
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

    getData(){
        let recipes = [];
        axios.get('https://www.food2fork.com/api/search?key=' + key + '&q=' + this.state.input)
            .then((response) => {
                console.log(response)
                var divs = response.data.recipes.map((x) => {
                    console.log(x);
                    return(
                        <Animated key = {x.recipe_id} animationIn="fadeInUp" isVisible={true}>
                            <div className = 'row mb-4' style = {style.body}>
                                <img className = 'col-4 img-fluid' src = {x.image_url} alt = {x.title} style = {style.image} />
                                <div className = 'col-8'>
                                    <a href = {x.source_url} target = "_blank" rel="noopener noreferrer">
                                        <h2 className = "p-3" style = {style.header} dangerouslySetInnerHTML = {{__html: x.title}}></h2>
                                    </a>
                                    <p className = "pl-3">
                                        <em>Published By: <a href = {x.publisher_url}>{x.publisher}</a></em>
                                    </p>
                                    <p className = "pl-3">
                                        Recipe Id: {x.recipe_id}
                                    </p>
                                    <p className = "pl-3"> 
                                        Link: <a href = {x.source_url} target = "_blank" rel="noopener noreferrer">{x.source_url}</a>
                                    </p>
                                    <button
                                        className = "btn btn-sm btn-secondary"
                                        onClick = {() => {
                                            var data = {
                                                userId: this.props.id._id,
                                                title: x.title,
                                                publisher: x.publisher,
                                                publisherUrl: x.publisher_url,
                                                recipeId: x.recipe_id,
                                                link: x.source_url,
                                            }
                                            this.saveRecipe(data)
                                        }} 
                                    >Save Recipe</button>
                                </div>
                            </div>
                        </Animated>
                    );
                });

                recipes.push(divs);

                this.setState({
                    "dataHasLoaded": true,
                    "recipes": recipes[0]
                })
            }).catch(function(error){throw error});
    }

    saveRecipe(recipe){
        console.log(recipe)
        axios.post("/db/postrecipe", recipe)
            .then(() => {alert(recipe.title + ' recipe saved!')})
            .catch((error) => {if (error) throw error})
    }

    render(){
        if (this.state.recipes === "") {
            return(
                <Animated animationIn="fadeIn" isVisible={true}>
                    <div className = 'container bg-white py-3 px-5'>
                        <div className = 'row'>
                            <SavedRecipes 
                                id = {this.props.id}    
                            />
                        </div>
                        <div className = 'row'>
                            <input 
                                className = 'form-input mx-2'
                                onChange = {
                                    (event) => {this.setState({input: event.target.value})}
                                }
                            />
                            <button
                                className = 'btn btn-secondary mx-3'
                                onClick = {() => {this.getData()}}
                                >Submit
                            </button>
                        </div>
                        <div>
                            <h3 style = {style.text}>Enter a value into the search bar and click submit to find new recipes!</h3>
                        </div>
                    </div>
                </Animated>
            )
        } else {
            return(
                <Animated animationIn="fadeIn" isVisible={true}>
                    <div className = 'container bg-white py-3 px-5'>
                        <div className = 'row'>
                            <div style = {{width: "100%"}}>
                                <SavedRecipes 
                                    id = {this.props.id}    
                                />

                            </div>
                        </div>
                        <div>
                            <input 
                                onChange = {
                                    (event) => {this.setState({input: event.target.value})}
                                }
                            />
                            <button
                                className = 'btn btn-secondary mx-3'
                                onClick = {() => {this.getData()}}
                                >Submit
                            </button>
                        </div>
                        <div className = 'container'>
                            <h1 style = {style.text}>Recipe Results:</h1>
                            {this.state.recipes}
                        </div>
                    </div>
                </Animated>
            )
        }
    }
}

export default Recipes;