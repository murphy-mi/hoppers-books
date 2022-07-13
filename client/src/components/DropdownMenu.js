import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../index.css'

function DropdownMenu(props) {
    const categoryArr = [
        "architecture",
        "art",
        "computers",
        "cooking",
        "drama",
        "education",
        "fiction",
        "gardening",
        "history",
        "law",
        "mathematics",
        "medical",
        "music",
        "poetry",
        "psychology",
        "science",
        "travel"
    ]

    const dropDownCategories = categoryArr.map(category => {
        return (
            <Link
                className="link"
                key={category}
                to={`/browse/${category}`}
            >
                {category}
                {/* {category.substring(0, 1).toUpperCase() === + category.substring(1, category.length)} */}
            </Link >
        )
    })
    return (
        <div className="header-element" id="dropdown-container">
            <span className="dropdown-button">CATEGORY</span>
            <div className="dropdown-content">
                {dropDownCategories}
            </div>
        </div>
    );
}

export default DropdownMenu;