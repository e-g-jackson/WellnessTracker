import React from "react";
import './Header.css';

class Header extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="logo"><i className="fas fa-pepper-hot"></i> Wellness Tracker</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;