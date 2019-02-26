import React from "react";
import './Header.css';

class Header extends React.Component{
    render(){
        return(
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="logo"><i class="fas fa-pepper-hot"></i> Wellness Tracker</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;