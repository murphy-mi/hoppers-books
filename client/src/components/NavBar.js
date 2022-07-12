// import { useNavigate } from "react-router-dom";
// import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu.js";
import NavItem from "./NavItem.js";
import SearchBar from "./SearchBar.js";
import '../index.css'
import frogLogo from "../frog-logo.png"
import styled from "styled-components";

function NavBar({ user, onLogout }) {

    const LogoImage = styled.img`
    width: 50%;
    height: auto;
    margin: 0;
`;

    return (
        <nav className="navbar">
            <ul className="navbar-nav-left">
                <Link to="/" className="site-title">
                    <LogoImage src={frogLogo} alt="Hopper's Books" />
                </Link>
                <DropdownMenu />
                <SearchBar />
            </ul>
            <ul className="navbar-nav-right">
                <NavItem className="link" name="/cart" icon="🛒" />
                {
                    user && <NavItem className="link" name="/profile" icon="👤" />
                }
                {
                    !user
                        ? <Link className="link" to="/login" ><h3>Login</h3></Link>
                        : <h3 className="link" style={{ color: 'black' }} icon="Logout" onClick={onLogout}>Logout</h3>
                }
            </ul >
        </nav >
    );
}

export default NavBar;