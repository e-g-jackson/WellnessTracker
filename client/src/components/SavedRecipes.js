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
                        <h5>
                            <a href = {x.link} target = "_blank" rel = "noopener noreferrer">
                                {x.title}</a> from <em>{x.publisher}</em>
                        </h5>
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
            <div style = {{width: "100%"}}>
                <div className = "text-center">
                    <h4 className = "p-2" style = {{backgroundColor: "rgb(170, 37, 37)", color: "#ffffff", width: "100%"}}>Saved Recipes:</h4>
                    <br />
                </div>
                <div className = "pl-5">
                    <ul>
                        {this.state.recipes}
                    </ul>
                </div>
            </div>
        )
    }
}

export default SavedRecipes;