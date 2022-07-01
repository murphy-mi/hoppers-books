// import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu.js";
import NavItem from "./NavItem.js";
import SearchBar from "./SearchBar.js";
import '../index.css'
// import CategoryContainer from "./CategoryContainer";

function NavBar() {
    // Placeholder for login status
    const [user, setUser] = useState(false);

    return (
        <nav className="navbar">
            <ul className="navbar-nav-left">
                <Link to="/" className="site-title">HOPPER'S BOOKS</Link>
                <NavItem icon="Category">
                    <DropdownMenu />
                </NavItem>
                <SearchBar />
            </ul>
            <ul className="navbar-nav-right">
                <NavItem name="/cart" icon="🛒" />
                {
                    !user
                        ? <></>
                        : <NavItem name="/profile" icon="👤" />
                }
                {/* Will have to base this logic on login status */}
                {
                    !user
                        ? <NavItem name="/signin" icon="Login" />
                        : <NavItem name="/signout" icon="Logout" />
                }
            </ul >
        </nav >
    );
}

export default NavBar;