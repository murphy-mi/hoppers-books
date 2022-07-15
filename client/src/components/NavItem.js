import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../index.css'

function NavItem(props) {
    const [open, setOpen] = useState(false)
    // console.log(props)
    return (
        <div className="nav-item">
            <Link
                to={!props.children ? props.name : "#"}
                style={{ fontSize: "30px" }}
                className="icon-button"
                onClick={() => setOpen(!open)}
            >
                {props.icon}
            </Link>
            {open && props.children}
        </div>
    );
}

export default NavItem;