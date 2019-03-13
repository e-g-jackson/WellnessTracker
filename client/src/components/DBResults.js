import React from "react";
import $ from "jquery";
import {Animated} from "react-animated-css";

class DBResults extends React.Component {
    state = {results: ""};

    componentDidMount(){
        console.log(this.props.id)
        $.get("/db/getFoods/" + this.props.id._id, (res) => {
            var foodData = res.slice(0).reverse().map((x, index) => {
                var newIndex = index + 1;
                return(
                    <tr key = {newIndex}>
                        <th>{newIndex}</th>
                        <td>{x.foodName}</td>
                        <td>{x.meal}</td>
                        <td>{x.foodType}</td>
                        <td>{x.portion}</td>
                    </tr>
                )
           });
           this.setState({results: foodData})
        })
    }

    render(){
        return(
          <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <table className = 'table'>
                <thead className = 'thead-light'>
                    <tr>
                        <th scope = 'col'>#</th>
                        <th scope = 'col'>Food Name</th>
                        <th scope = 'col'>Meal</th>
                        <th scope = 'col'>Food Type</th>
                        <th scope = 'col'>Portion</th>
                    </tr>
                </thead>
                <tbody className = 'table-striped table-hover'>
                    {this.state.results}
                </tbody>
            </table>
          </Animated>

        )
    }
}

export default DBResults;