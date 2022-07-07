import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../index.css'
import styled from "styled-components";

const Card = styled.div`
    display: inline-block;
    text-align: start;
    margin: 0.5rem;
    padding: 0.5rem;
    /* border-radius: 5%; */
    max-width: 200px;
    height: 275px;
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
    const { accessInfo, searchInfo, selfLink, volumeInfo } = result;

    console.log(user)

    function onWishlistClick(e) {
        e.preventDefault()
        // making a separate post request to add the book to our DB?
        // THEN using that book id to create a new wishlists item
        const bookObj = {
            // book_id: ,
            user_id: user.user.id,
        }

        // fetch("/wishlists", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ username: username, password: password }),
        // }).then
        setInWishlist(!inWishlist)


    }

    function onCartClick(e) {
        e.preventDefault()
        setInCart(!inCart)
    }
    return (
        <Card>
            <a href={volumeInfo.infoLink} target="_blank" rel="noreferrer">
                <Link to={"#"}>
                    <BookPhoto
                        src={
                            volumeInfo.imageLinks
                                ? volumeInfo.imageLinks.smallThumbnail
                                : "https://static.wikia.nocookie.net/marvel/images/3/3f/No_Image_Cover.jpg/revision/latest?cb=20220320203549&path-prefix=tr"
                        }
                        alt="book photo"
                    />
                </Link>
            </a>
            <h3>{volumeInfo.title}</h3>
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