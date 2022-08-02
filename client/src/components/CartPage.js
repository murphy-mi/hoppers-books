import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import frogPeek from "../images/frog-peek.png";

const CartItemContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-left: 20%;
  align-items: center; 
  min-height: 400px;
  width: 60%;
  border: 1px solid #ccc;
  border-radius: 9px;
`;
const FrogImage = styled.img`
  width: 500px;
  height: 500px;
  z-index: 3;
  float: left;
  position: relative;
  left: -140px;
  /* margin-left: 0; */
`;

const CartItem = styled.a`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  border-radius: 15px;
  height: 125px;
  width: 50%;
  /* background: #2b2b2b; */
  color: #2b2b2b;
  text-decoration: none;
  text-align: center;
  &:hover {
    background-color: #fcfafa;
  }
  cursor: pointer;
  @media (min-width: 890px) and (max-width: 1355px) {
    width: 75%;
  }
  @media (min-width: 390px) and (max-width: 890px) {
    width: 100%;
  }
`;

function CartPage(user) {
  let navigate = useNavigate()
  const [cartItems, setCartItems] = useState([])
  const [cartTotalPrice, setCartTotalPrice] = useState(0.00)
  const [removedFromCart, setRemovedFromCart] = useState([])
  console.log(cartItems)

  useEffect(() => {
    fetch('http://localhost:3000/cart_items')
      .then(res => res.json())
      .then(setCartItems)
  }, [])

  useEffect(() => {
    let totalPrice = 0.00;
    cartItems.forEach((cartItem) => totalPrice += cartItem.book.price)
    setCartTotalPrice(totalPrice)
  }, [cartItems])

  function onCheckoutClick(e) {
    const userCartItems = cartItems.filter(cartItem => cartItem.user_id === user.user.id)
    userCartItems.forEach((cartItem) => {
      fetch(`http://localhost:3000/purchases`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ book_id: cartItem.book_id, user_id: user.user.id })
      })
        .then(res => res.json())
        .then(() => {
          fetch(`http://localhost:3000/cart_items/${cartItem.id}`, {
            method: 'DELETE',
          })
            .then(() => {
              fetch('http://localhost:3000/cart_items')
                .then(res => res.json())
                .then(setCartItems)
            })
        })
    })
    navigate("../")
  }

  function onRemoveClick(e) {
    fetch(`http://localhost:3000/cart_items/${e.target.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        fetch('http://localhost:3000/cart_items')
          .then(res => res.json())
          .then(setCartItems)
      })
  }

  if (user.username === '') return (
    <h2 style={{ display: "flex", justifyContent: 'center' }}>Cart</h2>
  )

  const userCartItems = cartItems.filter(cartItem => cartItem.user_id === user.user.id)
    .filter(cartItem => !removedFromCart.includes(cartItem.id))

  return (
    <div>
      <div>
        <h2 style={{ display: "flex", justifyContent: 'center', fontSize: "45px" }}>{user.user.username}'s cart</h2>
      </div>
      <div style={{ display: "flex", justifyContent: 'center' }}>
        <CartItemContainer>
          {cartItems.length !== 0
            ? userCartItems.map(cartItem => (
              <CartItem key={cartItem.id} >
                <div style={{ display: "flex", flexDirection: "column", justifyContent: 'start' }}>
                  <h2 style={{ display: "flex", justifyContent: 'start' }}>{cartItem.book.title}</h2>
                  <h4 style={{ display: "flex", justifyContent: 'start' }}>{cartItem.book.author}</h4>
                </div>
                <div>
                  <button className="remove-cart-item-button" onClick={onRemoveClick} id={cartItem.id}>Remove from cart</button>
                  <h4>{`$${cartItem.book.price}`}</h4>
                </div>
              </CartItem >
            ))
            : <CartItem>
              <h1 style={{ display: "flex", justifyContent: 'center' }}>Items in your cart will show up here.</h1>
            </CartItem>
          }
        </CartItemContainer >
        <FrogImage src={frogPeek} />
      </div>
      <div style={{ display: "flex", justifyContent: 'space-between', marginLeft: "20%", width: "56.5%", marginBottom: "20%" }}>
        <h3>
          {`TOTAL: $ ${Math.floor(cartTotalPrice * 100) / 100}`}
        </h3>
        <button className="checkout-button" onClick={onCheckoutClick}>Checkout</button>
      </div>
    </div >
  );
}

export default CartPage;