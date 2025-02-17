import { useContext } from "react";
import { ShopContext } from "../store/ShopContextProvider";

function CartItem({ title, price, amount, id }) {
  const { add, subtract } = useContext(ShopContext);

  return (
    <div className="bg-cartItemBg font-medium   py-2 px-4 rounded-md text-sm my-4 flex justify-between">
      <span>
        {title}(${price})
      </span>
      <span className="text-base font-semibold">
        <button
          className="px-3"
          onClick={() => {
            subtract(id);
          }}
        >
          -
        </button>
        {amount}
        <button
          className="px-3 "
          onClick={() => {
            add(id);
          }}
        >
          +
        </button>
      </span>
    </div>
  );
}

export default CartItem;
