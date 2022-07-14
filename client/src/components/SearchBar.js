import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import searchIcon from "../search.png"
import '../index.css'



function SearchBar(props) {
    const [searchValue, setSearchValue] = useState('')
    // console.log(props)

    let navigate = useNavigate()

    function onSearchSubmit(e) {
        e.preventDefault();
        console.log(searchValue)
        let urlFriendlyValue = searchValue.split(' ').join('-')
        navigate(`../search/${urlFriendlyValue}`)
    }


    return (
        <div className="search-container">
            <form className="search-form" onSubmit={onSearchSubmit}>
                <input type="search" value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder="Search for books" className="search-field" />
                <button type="submit" className="search-button">
                    <img src={searchIcon} alt="Search Icon" />
                </button>
            </form>
        </div>
    );
}

export default SearchBar;