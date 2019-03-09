import React from "react";
import './Header.css';
import {Animated} from "react-animated-css";

class Header extends React.Component{
    render(){
        return(
            <Animated animationIn="fadeInDown" isVisible={true}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="logo"><i className="fas fa-pepper-hot"></i> Wellness Tracker</h1>
                    </div>
                </div>
            </div>
            </Animated>
        )
    }
}

export default Header;

