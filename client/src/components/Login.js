import React from "react";
import axios from "axios";
// import "./Login.css";


class Login extends React.Component {


    state = {
        username: "",
        password: ""
    };

    handleInputChange = (event) => {
                this.setState({
            [event.target.name]: event.target.value
        })
    }


   handleSubmit = (event) => {
        event.preventDefault();
        const {username, password} = this.state;

        const userSignUp = {
            username,
            password
        };
        console.log(userSignUp)

        axios.post("/db/newuser", userSignUp)
            .then((response)=>{
                console.log(response)
            }).catch((error) => {throw error})
   }

   onSignIn (event){
        event.preventDefault();
        const {username, password} = this.state;

        const userLogin = {
            username,
            password
        };
        console.log('sign in!')
        console.log(userLogin)//needed?
        console.log(this.props.authorize());//needed?
   }

    render() {

        const {username, password} = this.state

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h2>Login</h2>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label>Username:</label>
                                        <input 
                                        name= "username"
                                         type="text"
                                         className="form-control" 
                                         id="username" 
                                         aria-describedby="username" 
                                         placeholder="Enter Username"
                                         value={username}
                                         onChange={this.handleInputChange}
                                         />
                                    </div>
                                    <div className="form-group">
                                        <label>Password:</label>
                                        <input 
                                        name="password"
                                        type="password" 
                                        className="form-control" 
                                        id="password" 
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="g-signin2" data-onsuccess="onSignIn">

                                    <button 
                                        type="button" 
                                        className="btn btn-secondary"
                                        onClick={(event)=>this.onSignIn(event)}
                                        >Sign In
                                    </button>
                                  

                                    </div>
                                    <br/>
                                    <button 
                                        type="submit" 
                                        className="btn btn-secondary"
                                        >Register
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        );
    };
};

export default Login;