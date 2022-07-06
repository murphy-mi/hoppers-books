import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../index.css'

function NavItem(props) {
    const [open, setOpen] = useState(false)

    return (
        <li className="nav-item">
            <Link
                to={!props.children ? props.name : "#"}
                className="icon-button"
                onClick={() => setOpen(!open)}
            >
                {props.icon}
            </Link>
            {open && props.children}
        </li>
    );
}

export default NavItem;