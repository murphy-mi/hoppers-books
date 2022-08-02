import React, { useEffect, useState } from "react";
import styled from "styled-components";
import frogMain from "../images/frog-main.png"

const BookList = styled.div`
    border: 3px solid gray;
    border-radius: 6px;
    /* overflow-x: hidden; */
    overflow: auto;
    min-width: 400px;
    width: auto;
    height: 400px;
    margin-bottom: 5px;
    z-index: 3;
    padding-right: 10px;
    padding-left: 5px;
    background-color: #F3F3F3;
    `;

const ListName = styled.div`
    font-size: 40px;
    margin-bottom: 0;
    `;

const FrogImage = styled.img`
    width: 300px;
    height: 300px;
    margin-top: 400px;
    position: relative;
    /* left: -140px; */
`;

function ProfilePage({ user }) {
    const [wishlists, setWishlists] = useState([])
    const [purchases, setPurchases] = useState([])

    useEffect(() => {
        fetch('https://hoppers-books.herokuapp.com/wishlists')
            .then(res => res.json())
            .then(setWishlists)

        fetch('https://hoppers-books.herokuapp.com/purchases')
            .then(res => res.json())
            .then(setPurchases)
    }, [])

    if (!user.username) return <></>

    const userWishlists = wishlists.filter(wishlist => wishlist.user_id === user.id)

    const userPurchases = purchases.filter(purchase => purchase.user_id === user.id)

    return (
        <div className="profile-page-container">
            <div>
                <h2 style={{ display: "flex", justifyContent: 'center', fontSize: "45px" }}>Hello, {user.username}!</h2>
            </div>
            <div className="purchase-wishlist-container">
                <div>
                    <ListName>Wishlist</ListName>
                    <BookList>
                        <ul>
                            {userWishlists.map(wishlist => (
                                <li>
                                    <h2 style={{ marginBottom: 0 }}>{wishlist.book.title}</h2>
                                    <h3 style={{ marginTop: 0 }}>{wishlist.book.author}</h3>
                                </li>
                            ))}
                        </ul>
                    </BookList>
                </div>
                <FrogImage src={frogMain} />
                <div>
                    <ListName>Purchases</ListName>
                    <BookList>
                        <ul>
                            {userPurchases.map(purchase => (
                                <li>
                                    <h2 style={{ marginBottom: 0 }}>{purchase.book.title}</h2>
                                    <h3 style={{ marginTop: 0 }}>{purchase.book.author}</h3>
                                </li>
                            ))}
                        </ul>
                    </BookList>
                </div>
            </div>
        </div >
    );
}

export default ProfilePage;