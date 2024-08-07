import React, { useRef, useContext} from "react";
import logo from "../assets/logo.png";
import Button from "./Button";
import Cart from "./Cart";
import { ShopContext } from "../store/ShopContextProvider";

function Header() {

  const { cart, findTotalCost } = useContext(ShopContext)
  const cartModal = useRef();

  function openCart() {
    cartModal.current.open();
    findTotalCost();
  }
  return (
    <>
      <nav className="flex items-center justify-between py-12">
        <Cart
          ref={cartModal}
        />
        <span className="flex items-center gap-8">
          <img src={logo} className="w-20 " alt="company logo" />
          <h1 className="text-4xl  font-semibold text-offYellow hidden md:block">
            ELEGANT CONTEXT
          </h1>
        </span>
        <span>
          <Button onClick={openCart}> Cart ({cart.length})</Button>
        </span>
      </nav>
    </>
  );
}

export default Header;
