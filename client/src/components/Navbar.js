import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button 
                    className = "navbar-toggler" 
                    type = "button" 
                    data-toggle = "collapse" 
                    data-target = "#navbarNav" 
                    aria-controls = "navbarNav" 
                    aria-expanded = "false" 
                    aria-label = "Toggle navigation"
                >
                    <span className = "navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <Link to="/profile">
                                <div className = "nav-link">   
                                    Profile
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/food">
                                <div className = "nav-link">   
                                    Food Tracker
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/weightsubmit">
                                <div className = "nav-link">   
                                    Weight Tracker
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/recipes">
                                <div className = "nav-link">   
                                    Recipe Finder
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to= "/bmi">
                                <div className="nav-link">
                                    BMI
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;