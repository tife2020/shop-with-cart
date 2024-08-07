import { useRef, forwardRef, useImperativeHandle, useContext } from "react";
import CartItem from "./CartItem";
import {createPortal} from 'react-dom'
import { ShopContext } from "../store/ShopContextProvider";


const Cart = forwardRef(function Cart (props, ref){
  const { cart, totalCost } = useContext(ShopContext)

  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  let cartContent = (
    <>
      <p className="mb-4">No item in cart!</p>
      <p className="text-right mb-4">
        Cart Total: <span className="font-bold">$0.00</span>
      </p>
    </>
  );

  let cartBtn = (
    <button className="bg-[#3c2a0e] text-white py-2 px-4 rounded-md text-base hover:bg-[#271E07]">
      Close
    </button>
  );

  if (cart.length > 0) {
    cartContent = (
      <>
        {cart.map((item) => (
          <CartItem key={item.id} {...item}/>
        ))}
        <p className="text-right mb-4">
          Cart Total: <span className="font-bold">${totalCost}</span>
        </p>
      </>
    );
    cartBtn = (
      <>
        <button className="rounded-md text-base hover:text-[#271E07]">
          Close
        </button>
        <button className="bg-[#3c2a0e] text-white py-2 px-4 rounded-md text-base hover:bg-[#271E07]">
          Checkout
        </button>
      </>
    );
  }
  return createPortal(
    <dialog
      ref={dialog}
      className="bg-cartBg p-4 rounded-md gap-4 w-1/3 backdrop:bg-black/80 font-cusFont"
    >
      <h1 className="font-semibold text-2xl uppercase text-[#32230C] mb-4">
        Your Cart
      </h1>
      {cartContent}
      <form
        className=" justify-end text-mainText font-semibold mb-4 flex gap-4 "
        method="dialog"
      >
        {cartBtn}
      </form>
    </dialog>, document.getElementById('modal')
  );
});

export default Cart;
