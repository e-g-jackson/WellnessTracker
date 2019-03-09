import React from "react";
import $ from "jquery";

class DBResults extends React.Component {
    state = {results: ""};

    componentDidMount(){
        $.get("/db/getFoods", (res) => {
            var foodData = res.slice(0).reverse().map((x, index) => {
                var newIndex = index + 1;
                return(
                    <tr key = {newIndex}>
                        <th>{newIndex}</th>
                        <td>{x.foodName}</td>
                        <td>{x.meal}</td>
                        <td>{x.foodType}</td>
                    </tr>
                )
           });
           this.setState({results: foodData})
        })
    }

    render(){
        return(
            <table className = 'table'>
                <thead className = 'thead-light'>
                    <tr>
                        <th scope = 'col'>#</th>
                        <th scope = 'col'>Food Name</th>
                        <th scope = 'col'>Meal</th>
                        <th scope = 'col'>Food Type</th>
                    </tr>
                </thead>
                <tbody className = 'table-striped table-hover'>
                    {this.state.results}
                </tbody>
            </table>
        )
    }
}

export default DBResults;