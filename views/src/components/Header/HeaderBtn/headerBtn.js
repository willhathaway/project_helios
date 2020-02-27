import React from "react";
import "./headerBtn.css";

function HeaderBtn(props) {
    return (
    <button className="headerBtn">{props.btnName}</button>
    )
}

export default HeaderBtn;