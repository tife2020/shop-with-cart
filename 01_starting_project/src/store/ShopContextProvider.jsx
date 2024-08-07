import { useState, createContext } from "react";
import { DUMMY_PRODUCTS as Products } from "../dummy-products";

export const ShopContext = createContext({
  products: [],
  cart: [],
  totalCost: "",
  addToCart: () => {},
  add: () => {},
  subtract: () => {},
  findTotalCost: () => {},
});

export default function ShopContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState("");

  function addToCart(id) {
    setCart((prevCart) => {
      const duplicateCart = [...prevCart];

      const indexInCart = duplicateCart.findIndex((item) => item.id === id);

      if (indexInCart != -1) {
        // if (dupliduplicateCart[indexInCart]){}
        duplicateCart[indexInCart].amount += 1;
        return duplicateCart;
      } else {
        const itemIndex = Products.findIndex((product) => product.id === id);
        const newCartItem = {
          ...Products[itemIndex],
          amount: 1,
        };

        return [...prevCart, newCartItem];
      }
    });
  }

  function add(id) {
    setCart((prevCart) => {
      const duplicateCart = [...prevCart];

      const indexInCart = duplicateCart.findIndex((item) => item.id === id);
      duplicateCart[indexInCart].amount += 1;

      findTotalCost();
      return duplicateCart;
    });
  }

  function subtract(id) {
    setCart((prevCart) => {
      const duplicateCart = [...prevCart];

      const indexInCart = duplicateCart.findIndex((item) => item.id === id);

      if (duplicateCart[indexInCart].amount === 1) {
        duplicateCart.splice(indexInCart, 1);

        findTotalCost();
        return duplicateCart;
      } else {
        duplicateCart[indexInCart].amount -= 1;
        findTotalCost();
        return duplicateCart;
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

    total = total.toFixed(2);
    setTotalCost(total);
  }

  const contextValues = {
    products: Products,
    cart: cart,
    totalCost: totalCost,
    addToCart: addToCart,
    add: add,
    subtract: subtract,
    findTotalCost: findTotalCost,
  };

  return (
    <ShopContext.Provider value={contextValues}>
      {children}
    </ShopContext.Provider>
  );
}
