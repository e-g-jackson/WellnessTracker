import React from "react";
import $ from "jquery";
import {Animated} from "react-animated-css";

class DBResults extends React.Component {
    state = {results: ""};

    componentDidMount(){
        this.getData();
    }

    componentDidUpdate(){
        this.getData();
    }

    getData(){
        $.get("/db/getFoods/" + this.props.id._id, (res) => {
            var foodData = res.slice(0).reverse().map((x, index) => {
                var newIndex = index + 1;
                return(
                    <tr key = {newIndex}>
                        <th>{newIndex}</th>
                        <td>{x.foodName.toUpperCase()}</td>
                        <td>{x.meal}</td>
                        <td>{x.foodType}</td>
                        <td>{x.portion}</td>
                    </tr>
                )
            });
            console.log(res)
            var resLength = res.length;
            var stateLength = this.state.results.length
            console.log("resLength: " + resLength)
            console.log("stateLength: " + stateLength)
            if(this.state.results === ""){
                console.log('Table Resetting')
                this.setState({results: foodData})
                // console.log(this.state.results[0].foodName)
                // console.log(res[0].foodName)
            } else if(resLength !== stateLength){
                this.setState({results:foodData})
            }
        })
    }

    render(){
        if(this.state.results === ""){
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
                        <tr>
                          <td>-#-</td>
                          <td>-#-</td>
                          <td>-#-</td>
                          <td>-#-</td>
                          <td>-#-</td>
                          <td>-#-</td>
                        </tr>
                      </tbody>
                  </table>
                </Animated>
      
              )
        } else {
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
}

export default DBResults;