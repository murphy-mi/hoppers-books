// import { useNavigate } from "react-router-dom";
// import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu.js";
import NavItem from "./NavItem.js";
import SearchBar from "./SearchBar.js";
import '../index.css'

function NavBar({ user, onLogout }) {

    return (
        <nav className="navbar">
            <ul className="navbar-nav-left">
                <Link to="/" className="site-title">HOPPER'S BOOKS</Link>
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