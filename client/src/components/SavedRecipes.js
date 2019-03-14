import React from 'react';
import $ from 'jquery';

class SavedRecipes extends React.Component {
    state = {
        recipes: ""
    }
    componentDidMount(){
        $.get('/db/getRecipes/' + this.props.id._id, (res) => {
            console.log(res)
            const recipes = res.map((x) => {
                return(
                    <li className = "" key = {x.recipeId}>
                        <a href = {x.link} target = "_blank" rel = "noopener noreferrer">
                            <h5>
                                {x.title}
                            </h5>
                        </a>
                    </li>
                )
            })
            this.setState({
                recipes: recipes
            })
        })
    }
    render(){
        if (this.state.recipes === ""){
            return(<h3><em>No Recipes saved yet!</em></h3>)
        }
        return(
            <div>
                <h4 className = "p-3" style = {{backgroundColor: "rgb(170, 37, 37)", color: "#ffffff"}}>Saved Recipes:</h4>
                <br />
                <ul>
                    {this.state.recipes}
                </ul>
            </div>
        )
    }
}

export default SavedRecipes;