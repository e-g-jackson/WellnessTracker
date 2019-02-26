import React from "react";

class Food extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                    <h2>Daily Food Tracker</h2>
                    <h3>Current Date</h3>
                        <div className="card">
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label for="food">Food:</label>
                                        <input type="food" class="form-control" id="food" aria-describedby="food" placeholder="Enter Food"/>
                                    </div>
                                    <select name="cars" size="3">
                                        <option value="volvo">Breakfast</option>
                                        <option value="saab">Lunch</option>
                                        <option value="fiat">Snack</option>
                                        <option value="audi">Dinner</option>
                                    </select>
                                    <select name="cars" size="3">
                                        <option value="volvo">Protein</option>
                                        <option value="saab">Carb</option>
                                        <option value="fiat">Fruit</option>
                                        <option value="audi">Vegetable</option>
                                    </select>
                                    <br/>
                                    <br/>
                                    <button type="button" className="btn btn-secondary">Save</button>
                                </form>
                            </div>
                        </div>
                        <br/>
                        <div className="card">
                            <div className="card-body">
                               DISPLAY DATABASE HERE
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        );
    };
};

export default Food;