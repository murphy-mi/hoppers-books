import React, { useState } from "react";
import { CSSTransition } from 'react-transition-group';
import { Link } from "react-router-dom";
import DropdownItem from "./DropdownItem";
import '../index.css'

function DropdownMenu(props) {
    const [activeMenu, setActiveMenu] = useState('main')

    return (
        <div className="dropdown">
            <CSSTransition
                in={activeMenu === 'main'}
                unmountOnExit
                timeout={500}
                classNames="menu-primary"
            >
                <div className="menu">
                    <DropdownItem name="/science-fiction">Science Fiction</DropdownItem>
                    <DropdownItem name="/mystery">Mystery</DropdownItem>
                </div>
            </CSSTransition>
        </div >
    );
}

export default DropdownMenu;