import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu.js";
import NavItem from "./NavItem.js";
import SearchBar from "./SearchBar.js";
import '../index.css'
// import CategoryContainer from "./CategoryContainer";

function NavBar() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <div className="login-container">
            <div>
                <form onSubmit={handleSubmit}>
                    <h3>Username:</h3>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    ></input>
                    <h3>Password:</h3>
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <button>Log in</button>
                </form>
            </div>
        </div>
    );
}

export default NavBar;