import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
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