import React from "react";
import { Link } from "react-router-dom";
import '../index.css'

function DropdownMenu(props) {
    // console.log(props)
    return (
        <Link to={`browse${props.name}`} className="menu-item">
            {props.children}
        </Link>
    );
}

export default DropdownMenu;