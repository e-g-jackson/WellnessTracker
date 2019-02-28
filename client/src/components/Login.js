import React from "react";
// import "./Login.css";

class Login extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h2>Login</h2>
                                <form>
                                    <div className="form-group">
                                        <label>Username:</label>
                                        <input type="username" className="form-control" id="username" aria-describedby="username" placeholder="Enter Username"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password:</label>
                                        <input type="password" className="form-control" id="password" placeholder="Enter Password"/>
                                    </div>
                                    <div className="g-signin2" data-onsuccess="onSignIn">
                                    <button type="button" className="btn btn-secondary">Sign In</button>
                                    </div>
                                    <br/>
                                    <button type="button" className="btn btn-secondary">Register</button>
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