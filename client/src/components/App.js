import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./NavBar.js";
import BrowsePage from "./BrowsePage.js"
import LoginPage from "./LoginPage.js";
import HomePage from "./HomePage.js";
import ProfilePage from "./ProfilePage.js";
import CartPage from "./CartPage.js";


function App() {
  const [user, setUser] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
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
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate("../")
      }
    });
  }

  // if (!user) return (<></>)

  return (
    <>
      <div>
        <div>
          <NavBar user={user} onLogout={onLogout} />
        </div>
        <div className="display-page-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage user={user} />} />
            <Route path="/login" element={<LoginPage onLogin={onLogin} />} />
            <Route path="/cart" element={<CartPage user={user} />} />
            <Route path="/browse" element={<BrowsePage user={user} />} />
            <Route path="/browse/:name" element={<BrowsePage user={user} />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
