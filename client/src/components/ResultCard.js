import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../index.css'
import styled from "styled-components";

const Card = styled.div`
    display: inline-block;
    text-align: start;
    margin: 1rem;
    padding: 1rem;
    /* border-radius: 5%; */
    max-width: 200px;
    height: 300px;
    /* background: #2b2b2b; */
    color: #2b2b2b;
    &:hover {
        background-color: #fcfafa;
    }
    cursor: pointer;
    @media (max-width: 822px) {
        width: 100%;
        justify-self: center;
        align-self: center;
    }
`;

const BookPhoto = styled.img`
    height: 150px;
    width: 100px;
    box-shadow: 2px 2px 3px black;
    /* margin-top: 0.5rem; */
    /* border-radius: 5%; */
    object-fit: cover;
`;

function ResultCard({ result, index, user }) {
    const [inWishlist, setInWishlist] = useState(false)
    const [inCart, setInCart] = useState(false)
    const [bookPrice, setBookPrice] = useState(null)
    const { accessInfo, searchInfo, selfLink, volumeInfo } = result;

    // console.log(result)
    // console.log(user)


    useEffect(() => {
        const randPrice = ((Math.random() * 12) + 4)
        const strPrice = randPrice > 10 ? `${randPrice}`.substring(0, 5) : `${randPrice}`.substring(0, 4)
        setBookPrice(strPrice)
    }, [])

    function onWishlistClick(e) {
        e.preventDefault()
        console.log(bookPrice)

        const bookObj = {
            title: volumeInfo.title,
            price: bookPrice,
            author: volumeInfo.authors[0] ? volumeInfo.authors[0] : "",
            genre: volumeInfo.categories[0] ? volumeInfo.categories[0] : "",
            image: volumeInfo.imageLinks.smallThumbnail ? volumeInfo.imageLinks.smallThumbnail : "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg"
        }
        console.log(bookObj)

        fetch("/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookObj)
        })
            .then(res => res.json())
            .then(data => saveWishlist(data))

        function saveWishlist(bookData) {
            const wishlistObj = {
                book_id: bookData.id,
                user_id: user.user.id
            }
            fetch("/wishlists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(wishlistObj)
            })
                .then(res => res.json())
                .then(console.log)
        }
        setInWishlist(!inWishlist)
    }

    function onCartClick(e) {
        e.preventDefault()
        const bookObj = {
            title: volumeInfo.title,
            price: bookPrice,
            author: volumeInfo.authors[0] ? volumeInfo.authors[0] : "",
            genre: volumeInfo.categories[0] ? volumeInfo.categories[0] : "",
            image: volumeInfo.imageLinks.smallThumbnail ? volumeInfo.imageLinks.smallThumbnail : "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg"
        }
        fetch("/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookObj)
        })
            .then(res => res.json())
            .then(data => saveCartItem(data))

        function saveCartItem(bookData) {
            const cartItemObj = {
                book_id: bookData.id,
                user_id: user.user.id
            }
            fetch("/cart_items", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(cartItemObj)
            })
                .then(res => res.json())
                .then(console.log)
        }
        setInCart(!inCart)
    }

    function limitChars(str) {
        return str.length > 35 ? str.substring(0, 32) + '...' : str
    }

    return (
        <Card>
            <a href={volumeInfo.infoLink} target="_blank" rel="noreferrer">
                <Link to={"#"}>
                    <BookPhoto
                        src={
                            volumeInfo.imageLinks
                                ? volumeInfo.imageLinks.smallThumbnail
                                : "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg"
                        }
                        alt="book photo"
                    />
                </Link>
            </a>
            <h3>{limitChars(volumeInfo.title)}</h3>
            <h4>{volumeInfo.authors && limitChars(volumeInfo.authors[0])}</h4>
            <h4>{bookPrice}</h4>
            <div className="wishlist-cart-container">
                <button
                    onClick={onWishlistClick}
                >
                    {!inWishlist ? "Add to Wishlist" : "Remove from Wishlist"}
                </button>
                <button
                    onClick={onCartClick}
                >
                    {!inCart ? "Add to Cart" : "Remove from Cart"}
                </button>
            </div>

        </Card>
    );
}

export default ResultCard;