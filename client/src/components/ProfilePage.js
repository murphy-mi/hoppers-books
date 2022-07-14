import React, { useEffect, useState } from "react";

function ProfilePage({ user }) {
    const [wishlists, setWishlists] = useState([])

    console.log("Profile User", user)


    useEffect(() => {
        fetch('http://localhost:3000/wishlists')
            .then(res => res.json())
            .then(setWishlists)
    }, [])

    if (!user.username) return <></>

    const userWishlists = wishlists.filter(wishlist => wishlist.user_id === user.id)

    // console.log(userWishlists.map(w ishlist => wishlist.book.title.toString()))

    return (
        <div className="profile-page-container">
            <div>
                <h2 style={{ display: "flex", justifyContent: 'center' }}>Hello, {user.username}!</h2>
            </div>
            <div className="account-wishlist-container">
                <div>
                    <h4>Wishlist</h4>
                    <ul>
                        {userWishlists.map(wishlist => (
                            <li>{wishlist.book.title}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4>Purchases</h4>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;