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
                    <ul key = {x.recipeId}>
                        <a href = {x.title}>
                            <h5>
                                {x.title}
                            </h5>
                        </a>
                    </ul>
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
                <h3 className = "pl-5">Saved Recipes:</h3>
                <br />
                <ul>
                    {this.state.recipes}
                </ul>
            </div>
        )
    }
}

export default SavedRecipes;