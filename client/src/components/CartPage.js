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
  const [cartTotalPrice, setCartTotalPrice] = useState(0.00)
  console.log(cartItems)

  useEffect(() => {
    fetch('http://localhost:3000/cart_items')
      .then(res => res.json())
      .then(setCartItems)
  }, [])

  useEffect(() => {
    let totalPrice = 0.00;
    cartItems.forEach((cartItem) => totalPrice += cartItem.price)
    setCartTotalPrice(totalPrice)
  }, [cartItems])

  function onRemoveClick(e) {
    e.preventDefault();
    // GETTING UNCAUGHT (IN PROMISE) SYNTAXERROR: UNEXPECTED END OF JSON INPUT 
    // BUT WHEN I MAKE A CHANGE TO MY CODE (EVEN TYPING COMMENTS) AND SAVE IT THE FETCH GOES THROUGH 
    fetch(`http://localhost:3000/cart_items/${e.target.id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(() => {
        setCartItems(() => cartItems.filter(cartItem => cartItem.id !== e.target.id))
      })
  }


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
            <button onClick={onRemoveClick} id={cartItem.id}>Remove from cart</button>
          </CartItem>
        ))}
      </CartItemContainer>
      <h3>
        {`TOTAL: $ ${cartTotalPrice}`}
      </h3>
    </div >
  );
}

export default CartPage;