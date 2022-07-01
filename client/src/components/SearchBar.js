import React from "react";
import { Link } from "react-router-dom";
import '../index.css'

function SearchBar(props) {
    console.log(props)
    return (
        <div className="search">
            <div className="search-inputs">
                <input type="text" />
            </div>
            <div className="searchInputs">

            </div>
        </div>
    );
}

export default SearchBar;