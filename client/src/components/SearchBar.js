import React from "react";
import { Link } from "react-router-dom";
import searchIcon from "../search.png"
import '../index.css'

function SearchBar(props) {
    // console.log(props)

    function onSearchSubmit() {

    }


    return (
        <div className="search-container">
            <form className="search-form" onSubmit={onSearchSubmit}>
                <input type="search" placeholder="Search for books" className="search-field" />
                <button type="submit" className="search-button">
                    <img src={searchIcon} alt="Search Icon" />
                </button>
            </form>
        </div>
    );
}

export default SearchBar;