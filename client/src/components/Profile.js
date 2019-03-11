import React from "react";
import axios from "axios";
import Graph from "./Graph";
import DBResults from "./DBResults";
import {Animated} from "react-animated-css";


class Profile extends React.Component {
    state = {
        weightData: null
    }
    componentDidMount(){
        console.log(this.props.id)
        //GET Weight Data
        axios.get("/db/getweights/" + this.props.id._id)
            .then(response => {
                const data = response.data;
                const newList = [];
                for (var i = 0; i < data.length; i++){
                    const format = data[i].createdAt.split("T")
                    const newData = {
                        label: format[0],
                        value: data[i].weight
                    };
                    newList.push(newData);
                }
                if(newList !== this.state.data){
                this.setState({weightData: newList});
                } else {
                    alert('Same Data');
                }
            }).catch(error => {
                throw error;
            })
    }
    render() {
        return (
          <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <div className = 'container bg-white'>
                <div className = 'row'>
                    <div className = 'col-6'>
                        <Graph 
                            data = {this.state.weightData}
                        />
                    </div>
                    
                    {/* <div className = 'col-2'></div> */}

                    <div className = 'col-6 py-3'>
                        <DBResults 
                            id = {this.props.id}
                        />

                    </div>
                </div>
            </div>
{/*            // <div className="container">
            //     <div className="row">
            //         <div className="col-md-3"></div>
            //         <div className="col-md-6">
            //             <h2>Hello (Username!)</h2>
            //             <div className="card">
            //                 <div className="card-body">
            //                     <h4>Fill in the information below:</h4>
            //                     <form>
            //                         <div className="form-group">
            //                             <label for="weight">Weight:</label>
            //                             <input type="weight" class="form-control" id="weight" aria-describedby="weight" placeholder="Enter Weight"/>
            //                         </div>
            //                         <div class="form-group">
            //                             <label for="height">Height:</label>
            //                             <input type="height" class="form-control" id="height" placeholder="Enter Height"/>
            //                         </div>
            //                         <div className="form-group">
            //                             <label for="age">Age:</label>
            //                             <input type="age" class="form-control" id="age" aria-describedby="age" placeholder="Enter Age"/>
            //                         </div>
            //                         <div class="form-group">
            //                             <label for="goalWeight">Goal Weight:</label>
            //                             <input type="goalWeight" class="form-control" id="goalWeight" placeholder="Enter Goal Weight"/>
            //                         </div>
            //                         <button type="button" className="btn btn-secondary">Submit</button>
            //                     </form>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="col-md-3"></div>
            //     </div>
        // </div>*/}
            </Animated>

        );
    };
};

export default Profile;