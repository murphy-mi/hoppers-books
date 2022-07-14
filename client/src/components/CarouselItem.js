import React, { useEffect, useState } from "react";
import Slider from "react-slick"
import styled from "styled-components";


function CarouselItem({ result, index, bookIndex }) {
    // Get googleResults specific to list type
    const [googleResults, setGoogleResults] = useState([])
    const [inCart, setInCart] = useState(false)
    const [inWishlist, setInWishlist] = useState(false)

    console.log('Google Results:', googleResults)

    function onCartClick() {
        setInCart(!inCart)
    }

    function onWishlistClick() {
        setInWishlist(!inWishlist)
    }

    return (
        <div className={index === bookIndex ? "slide activeSlide" : "slide"}>
            <img src={result.image} style={{ marginTop: "50px", boxShadow: "0 10px 6px -6px black" }} />
            <h3 style={{ marginTop: "30px", position: "relative", textAlign: "center" }}>{result.title}</h3>
            <h4 style={{ position: "relative", textAlign: "center" }}>{result.author}</h4>
            <div style=
                {{
                    position: "relative",
                    textAlign: "center"
                }}
            >
                <button
                    className="wishlist-add-button"
                    onClick={onWishlistClick}>{!inWishlist ? "Add to Wishlist" : "Remove from Wishlist"}
                </button>
                <button
                    className="cart-add-button"
                    onClick={onCartClick}>{!inCart ? "Add to Cart" : "Remove from Cart"}
                </button>
            </div>
        </div>
    )
}

export default CarouselItem;