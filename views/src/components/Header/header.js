import React from "react";
import "./header.css";

function Header(props) {
    return (
    <div className="header">
        <h3 className="username">Welcome {props.username}</h3>
        <button className="headerBtn">calendar</button>
        <button className="headerBtn">menu</button>
        <button className="headerBtn">log out</button>
    </div>
    )
}

export default Header;