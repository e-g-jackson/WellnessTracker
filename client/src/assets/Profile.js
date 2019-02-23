import React from "react";

class Profile extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h2>Hello (Username!)</h2>
                        <div className="card">
                            <div className="card-body">
                                <h4>Fill in the information below:</h4>
                                <form>
                                    <div className="form-group">
                                        <label for="weight">Weight:</label>
                                        <input type="weight" class="form-control" id="weight" aria-describedby="weight" placeholder="Enter Weight"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="height">Height:</label>
                                        <input type="height" class="form-control" id="height" placeholder="Enter Height"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="age">Age:</label>
                                        <input type="age" class="form-control" id="age" aria-describedby="age" placeholder="Enter Age"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="goalWeight">Goal Weight:</label>
                                        <input type="goalWeight" class="form-control" id="goalWeight" placeholder="Enter Goal Weight"/>
                                    </div>
                                    <button type="button" className="btn btn-secondary">Submit</button>
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

export default Profile;