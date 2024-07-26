import React, { useState } from "react";
import Header from "./components/Header";
import Shop from "./components/Shop";
import { DUMMY_PRODUCTS as Products } from "./dummy-products";

function App() {
  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState("");

  function addToCart(id) {
    setCart((prevCart) => {
      const duplicatCart = [...prevCart];

      const indexInCart = duplicatCart.findIndex((item) => item.id === id);

      if (indexInCart != -1) {
        duplicatCart[indexInCart].amount += 1;
        return duplicatCart;
      } else {
        const itemIndex = Products.findIndex((product) => product.id === id);
        const newCartItem = {
          ...Products[itemIndex],
          amount: 1,
        };

        return [...prevCart, newCartItem];
      }
    }
    
  );
  }

  function add(id) {
    setCart((prevCart) => {
      const duplicatCart = [...prevCart];

      const indexInCart = duplicatCart.findIndex((item) => item.id === id);
      duplicatCart[indexInCart].amount += 1;

      findTotalCost();
      return duplicatCart;
    });
  }

  function subtract(id) {
    setCart((prevCart) => {
      const duplicatCart = [...prevCart];

      const indexInCart = duplicatCart.findIndex((item) => item.id === id);

      if (duplicatCart[indexInCart].amount === 1) {
        duplicatCart.splice(indexInCart, 1);

        findTotalCost();
        return duplicatCart;
      } else {
        duplicatCart[indexInCart].amount -= 1;
        findTotalCost();
        return duplicatCart;
      }
    });
  }

  function findTotalCost() {
    let total = cart.reduce((total, item) => {
      let itemPrice = item.price;
      let itemAmount = item.amount;
      let itemTotalPrice = itemAmount * itemPrice;
      return (total += itemTotalPrice);
    }, 0);

    total = total.toFixed(2)
    setTotalCost(total);
  }

  // console.log(cart);

  return (
    <div className="mx-auto max-w-[70%] font-cusFont ">
      <Header cart={cart} add={add} subtract={subtract} totalCost ={totalCost} findTotalCost={findTotalCost} />
      <Shop addToCart={addToCart} />
    </div>
  );
}

export default App;
