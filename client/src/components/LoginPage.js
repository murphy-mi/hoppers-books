import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DropdownMenu from "./DropdownMenu.js";
import NavItem from "./NavItem.js";
import SearchBar from "./SearchBar.js";
import '../index.css'
// import CategoryContainer from "./CategoryContainer";

function NavBar({ handleUserSignin }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    function handleLoginSubmit(e) {
        e.preventDefault()
        const loginObj = {
            username: username,
            password: password
        }
        fetch("/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginObj)
        })
            .then(res => res.json())
            .then((data) => {
                handleUserSignin(data)
                navigate("../")
            })
    }

    return (
        <div className="login-container">
            <div>
                <form onSubmit={handleLoginSubmit}>
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