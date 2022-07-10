import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CartItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CartItem = styled.a`
  display: flex;
  margin: 1rem;
  border-radius: 15px;
  height: 75px;
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
  const [cartItems, setCartItems] = useState([])
  console.log(cartItems)

  useEffect(() => {
    fetch('/cart_items')
      .then(res => res.json())
      .then(setCartItems)
  }, [])

  if (!user.user) return (
    <h2 style={{ display: "flex", justifyContent: 'center' }}>Cart</h2>
  )


  const userCartItems = cartItems.filter(cartItem => cartItem.user_id === user.user.id)

  return (
    <div>
      <div>
        <h2 style={{ display: "flex", justifyContent: 'center' }}>{user.user.username}'s cart</h2>
      </div>
      <CartItemContainer>
        {userCartItems.map(cartItem => (
          <CartItem key={cartItem.id} >
            <div>
              <h3>{cartItem.book.title}</h3>
            </div>
            <div>
              <h4>{cartItem.book.author}</h4>
            </div>
          </CartItem>
        ))}
      </CartItemContainer>
    </div >
  );
}

export default CartPage;