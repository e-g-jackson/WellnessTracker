import React from 'react';
import axios from 'axios';
// var input = 'pizza'
var key = '30e77a591ab3a009323f28be315be367';


class Recipes extends React.Component {
    state = {
        recipes: "",
        input: "pizza"
    }

    componentDidMount(){
        let recipes = [];
        axios.get('https://www.food2fork.com/api/search?key=' + key + '&q=' + this.state.input)
            .then((response) => {
                var divs = response.data.recipes.map((x) => {
                    console.log(x);
                    return(
                    <div className = 'row'>
                        <img className = 'col-4 img-fluid' src = {x.img_url} alt = {x.title} />
                        <div className = 'col-8'>
                            <a href = {x.source_url}>
                                <h3>
                                    {x.title}
                                </h3>
                            </a>
                            <p>
                                <em>Published By: {x.publisher}</em>
                            </p>
                        </div>
                    </div>
                    );
                });
                recipes.push(divs);

                // for(var i = 0; i<response.data.count; i++){
                //     var listNum = i + 1;
                //     var firstLine = '\n*******RESULT #' + listNum + '*******\n';
                //     var lastLine = '';

                //     console.log(firstLine);
                //     console.log('    Title: ' + response.data.recipes[i].title);
                //     console.log('    ID#: ' + response.data.recipes[i].recipe_id);
                //     console.log('    Link: ' + response.data.recipes[i].source_url + '\n');
                    
                //     for (var j = 0; j < firstLine.length; j++){
                //         lastLine += '*';
                //     };
                //     console.log(lastLine);
                // }

                this.setState({
                    "recipes": recipes[0]
                })
            }).catch(function(error){throw error});
    }
    render(){
        console.log(this.state.recipes)
        if(!this.state.recipes === ""){
            return(
                <h3>Waiting for recipes...</h3>
            )
        }
        return(
            <div className = 'container'>
                <h1>Hello World!</h1>
                {this.state.recipes}
            </div>
        )
    }
}

export default Recipes;