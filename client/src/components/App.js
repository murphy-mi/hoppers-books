// import { useState, useEffect } from "react";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "./NavBar.js";
import BrowsePage from "./BrowsePage.js"
import LoginPage from "./LoginPage.js";
import HomePage from "./HomePage.js";
import ProfilePage from "./ProfilePage.js";

function App() {
  // const [currentUser, setCurrentUser] = useState("")
  const [userLoggedIn, setUserLoggedIn] = useState(false);


  function handleUserSignin(userData) {
    // setCurrentUser(userData.username)
    setUserLoggedIn(true);
  }

  return (
    <>
      <div>
        <div>
          <NavBar userLoggedIn={userLoggedIn} />
        </div>
        <div className="display-page-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<LoginPage handleUserSignin={handleUserSignin} />} />
            <Route path="/cart" element={<h1>Cart Page</h1>} />
            <Route path="/browse" element={<BrowsePage />} />
            <Route path="/browse/:name" element={<BrowsePage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
