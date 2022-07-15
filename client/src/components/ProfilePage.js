import React, { useEffect, useState } from "react";
import styled from "styled-components";

const BookList = styled.div`
    border: 1px solid green;
    overflow-x: hidden;
    overflow-y: auto;
    width: auto;
    /* height: 400px; */
    margin-bottom: 5px;
    `;

const ListName = styled.div`
    font-size: 40px;
    margin-bottom: 0;
    `;

function ProfilePage({ user }) {
    const [wishlists, setWishlists] = useState([])
    const [purchases, setPurchases] = useState([])

    console.log("Profile User", user)


    useEffect(() => {
        fetch('http://localhost:3000/wishlists')
            .then(res => res.json())
            .then(setWishlists)

        fetch('http://localhost:3000/purchases')
            .then(res => res.json())
            .then(setPurchases)
    }, [])

    if (!user.username) return <></>

    const userWishlists = wishlists.filter(wishlist => wishlist.user_id === user.id)

    const userPurchases = purchases.filter(purchase => purchase.user_id === user.id)

    // console.log(userWishlists.map(w ishlist => wishlist.book.title.toString()))

    return (
        <div className="profile-page-container">
            <div>
                <h2 style={{ display: "flex", justifyContent: 'center' }}>Hello, {user.username}!</h2>
            </div>
            <div className="purchase-wishlist-container">
                <ListName>Wishlist</ListName>
                <BookList>
                    <ul>
                        {userWishlists.map(wishlist => (
                            <li>{wishlist.book.title}</li>
                        ))}
                    </ul>
                </BookList>
                <ListName>Purchases</ListName>
                <BookList>
                    <ul>
                        {userPurchases.map(purchase => (
                            <li>{purchase.book.title}</li>
                        ))}
                    </ul>
                </BookList>
            </div>
        </div >
    );
}

export default ProfilePage;