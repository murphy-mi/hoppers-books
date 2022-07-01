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
                    <DropdownItem name="/architecture">Architecture</DropdownItem>
                    <DropdownItem name="/art">Art</DropdownItem>
                    <DropdownItem name="/computers">Computers</DropdownItem>
                    <DropdownItem name="/cooking">Cooking</DropdownItem>
                    <DropdownItem name="/drama">Drama</DropdownItem>
                    <DropdownItem name="/education">Education</DropdownItem>
                    <DropdownItem name="/fiction">Fiction</DropdownItem>
                    <DropdownItem name="/gardening">Gardening</DropdownItem>
                    <DropdownItem name="/history">History</DropdownItem>
                    <DropdownItem name="/law">Law</DropdownItem>
                    <DropdownItem name="/mathematics">Mathematics</DropdownItem>
                    <DropdownItem name="/medical">Medical</DropdownItem>
                    <DropdownItem name="/music">Music</DropdownItem>
                    <DropdownItem name="/poetry">Poetry</DropdownItem>
                    <DropdownItem name="/psychology">Psychology</DropdownItem>
                    <DropdownItem name="/science">Science</DropdownItem>
                    <DropdownItem name="/travel">Travel</DropdownItem>
                </div>
            </CSSTransition>
        </div >
    );
}

export default DropdownMenu;