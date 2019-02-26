import React from "react";
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item nav-item-1">
                            <a class="nav-link" href="#">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Food Tracker</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Food Types</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Progress</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;