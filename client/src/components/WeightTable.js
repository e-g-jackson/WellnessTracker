import React from 'react';

class WeightTable extends React.Component {
    componentDidMount(){
        $.get("/db/getWeights/" + this.props.id._id, (res) => {
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
            <h2>Hi</h2>
        )
    }
}
