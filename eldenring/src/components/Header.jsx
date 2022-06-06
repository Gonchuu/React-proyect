import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="App-header">
        <h1 className="title">Elden Ring</h1>
            <Link to="/">
                <span>Home</span>
            </Link>
            <Link to="/about">
                <span>About</span>
            </Link>
            <Link to="/users">
                <span>Users</span>
            </Link>
            <Link to="/profile">
                <span>Profile</span>
            </Link>
        </header>
    );
};

export default Header;
