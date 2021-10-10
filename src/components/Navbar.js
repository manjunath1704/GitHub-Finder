import React from "react";
import { FaGithub } from "react-icons/fa";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="gf-navbar">
            <div className="gf-container">
                <div className="gf-navbar__wrap">
                    <div className="gf-navbar__left">
                        <Link to="/">
                            <FaGithub className="gf-navbar__logo" />
                        </Link>
                    </div>
                    <ul className="gf-navbar__right">
                        <li className="gf-navbar__item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="gf-navbar__item">
                            <Link to="/About">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
