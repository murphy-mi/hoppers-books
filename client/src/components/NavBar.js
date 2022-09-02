import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu.js";
import NavItem from "./NavItem.js";
import SearchBar from "./SearchBar.js";
import '../index.css'
import frogLogo from "../images/frog-logo.png"
import styled from "styled-components";

const LogoImage = styled.img`
    width: auto;
    height: 20rem;
    margin-right: 2rem;
    margin-bottom: 2rem;
    `;

function NavBar({ user, onLogout }) {

    return (
        <nav className="navbar">
            <Link to="/" className="site-title">
                <LogoImage src={frogLogo} alt="Hopper's Books" />
            </Link>
            <div className="navbar-nav-left">
                <DropdownMenu />
                <SearchBar />
            </div>
            <div className="navbar-nav-right">
                <NavItem className="link" name="/cart" icon="🛒" />
                {
                    user.username ? <NavItem className="link" name="/profile" icon="👤" /> : <></>
                }
                {
                    user.username !== ''
                        ? <h3 className="link" style={{ color: 'black', marginLeft: "35px" }} icon="Logout" onClick={onLogout}>Logout</h3>
                        : <Link className="link" to="/login" ><h3 style={{ marginTop: "20px" }}>Login</h3></Link>
                }
            </div >
        </nav >
    );
}

export default NavBar;