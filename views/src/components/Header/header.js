import React from "react";
import "./header.css";
import HeaderBtn from "./HeaderBtn/headerBtn"

function Header(props) {
    return (
    <div className="header">
        <h3 className="username">Welcome {props.username}</h3>
        <HeaderBtn btnName={"calendar"}/>
        <HeaderBtn btnName={"menu"}/>
        <HeaderBtn btnName={"sign out"}/>
    </div>
    )
}

export default Header;