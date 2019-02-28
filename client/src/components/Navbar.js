import React from "react";
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item nav-item-1">
                            <a className="nav-link" href="/profile">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/food">Food Tracker</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/types">Food Types</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/progress">Progress</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;