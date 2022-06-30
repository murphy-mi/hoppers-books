// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "./NavBar.js"
import BrowsePage from "./BrowsePage.js"
import HomePage from "./HomePage.js";
import ProfilePage from "./ProfilePage.js";

const columnStyleObj = {
  display: "flex",
  flexDirection: "column",
  // border: "1px solid black"
}

const rowStyleObj = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: "20px",
  marginLeft: "15px",
  marginRight: "15px",
  marginBottom: "20px",
  // border: "1px solid black"
}

const cartLoginStyleObj = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  // border: "1px solid black"
}
function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    <>
      <div style={columnStyleObj}>
        <div style={rowStyleObj}>
          <div>
            {/* EMPTY DIV FOR STYLING */}
          </div>
          <Link to="/" className="site-title">
            HOPPER'S BOOKS
          </Link>
          <div style={cartLoginStyleObj}>
            <div>
              <Link to="/cart" className="cart">
                Cart
              </Link>
            </div>
            <div>
              {/* Will have conditional logic here based on login status */}
              <Link to="/login" className="login">
                Login
              </Link>
              {/* {logout link} */}
            </div>
          </div>
        </div>

        <NavBar />
      </div>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<h1>Login Page</h1>} />
          <Route path="/cart" element={<h1>Cart Page</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
