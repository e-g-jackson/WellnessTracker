import React from 'react';
import $ from 'jquery';

class WeightTable extends React.Component {
    state = {
        results: ""
    }

    componentDidMount(){
        $.get("/db/getWeights/" + this.props.id._id, (res) => {
            console.log(res)
            var foodData = res.slice(0).reverse().map((x, index) => {
                var newIndex = index + 1;
                return(
                    <tr key = {newIndex}>
                        <th>{x.createdAt.split("T")[0]}</th>
                        <td>{x.weight}</td>
                    </tr>
                )
           });
           this.setState({results: foodData})
        })
    }
    render(){
        if(this.state.results === ""){
            return(
                <table className = 'table'>
                    <thead className = 'thead-light'>
                        <tr>
                            <th scope = 'col'>Created:</th>
                            <th scope = 'col'>Weight</th>
                        </tr>
                    </thead>
                    <tbody className = 'table-striped table-hover'>
                        <td>-#-</td>
                        <td>-#-</td>
                    </tbody>
                </table>
            )
        } else {
            return(
                <table className = 'table'>
                    <thead className = 'thead-light'>
                        <tr>
                            <th scope = 'col'>Created:</th>
                            <th scope = 'col'>Weight</th>
                        </tr>
                    </thead>
                    <tbody className = 'table-striped table-hover'>
                        {this.state.results}
                    </tbody>
                </table>
            )

        }
    }
}

export default WeightTable;