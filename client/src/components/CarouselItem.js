import React, { useEffect, useState } from "react";
import Slider from "react-slick"
import styled from "styled-components";


function CarouselItem({ result, index, bookIndex, user }) {
    const [inCart, setInCart] = useState(false)
    const [inWishlist, setInWishlist] = useState(false)

    function onCartClick() {
        const cartItemObj = {
            book_id: result.id,
            user_id: user.id
        }
        fetch("https://hoppers-books.herokuapp.com/cart_items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cartItemObj)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setInCart(!inCart)
            })
    }

    function onWishlistClick(e) {
        e.preventDefault()

        const wishlistObj = {
            book_id: result.id,
            user_id: user.id
        }
        fetch("https://hoppers-books.herokuapp.com/wishlists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(wishlistObj)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setInWishlist(!inWishlist)
            })
    }

    return (
        <div className={index === bookIndex ? "slide activeSlide" : "slide"}>
            <img src={result.image} style={{ marginTop: "50px", boxShadow: "0 10px 6px -6px black" }} />
            <h3 style={{ marginTop: "30px", position: "relative", textAlign: "center" }}>{result.title}</h3>
            <h4 style={{ position: "relative", textAlign: "center" }}>{result.author}</h4>
            <h4 style={{ position: "relative", textAlign: "center" }}>${result.price}</h4>
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