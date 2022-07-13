import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./NavBar.js";
import BrowsePage from "./BrowsePage.js"
import LoginPage from "./LoginPage.js";
import HomePage from "./HomePage.js";
import ProfilePage from "./ProfilePage.js";
import CartPage from "./CartPage.js";
import BookPage from "./BookPage.js";
import SearchPage from "./SearchPage.js";
import styled from "styled-components";

const FooterDiv = styled.div`
    width: 100%;
    height: 100px;
    margin: 0;
    background-color: #484a4d;
    display:flex;
    justify-content: center;
    color: white;
`;


function App() {
  const initialUser = {
    user: {
      admin: false,
      cart_items: [],
      id: '',
      purchases: [],
      username: "",
      wishlists: [],
    }
  }
  const [user, setUser] = useState(initialUser)
  console.log(user)

  const navigate = useNavigate()

  useEffect(() => {
    // auto-login
    fetch("http://localhost:3000/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function onLogin(userData) {
    setUser(userData)
    navigate("../");
  }

  function onLogout() {
    fetch(`http://localhost:3000/logout/${user.user.id}`, { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(initialUser);
        navigate("../")
      }
    });
  }


  return (
    <>
      <div>
        <div>
          <NavBar user={user} onLogout={onLogout} />
        </div>
        <div className="display-page-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={user.user.username !== '' ? <ProfilePage user={user} /> : null} />
            <Route path="/login" element={<LoginPage onLogin={onLogin} />} />
            <Route path="/cart" element={<CartPage user={user} />} />
            <Route path="/browse" element={<BrowsePage user={user} />} />
            <Route path="/browse/:name" element={<BrowsePage user={user} />} />
            <Route path="/search" element={<SearchPage user={user} />} />
            <Route path="/search/:name" element={<SearchPage user={user} />} />
            <Route path="/book" element={<BookPage user={user} />} />
          </Routes>
        </div>
        <FooterDiv>
          <div>
            <h4>Created by Max Murphy, 2022; </h4>
            <h4>Art by Alyssa Strasser</h4>
          </div>
        </FooterDiv>
      </div>
    </>
  )
}

export default App;
