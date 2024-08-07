import React, {useContext} from "react";
import ShopItem from "./ShopItem";
import { ShopContext } from "../store/ShopContextProvider";

function Shop() {

  const {products, addToCart} = useContext(ShopContext)

  return (
    <div className="py-8">
      <h1 className="font-semibold text-2xl text-headingtext">
        ELEGANT CLOTHING FOR EVERYONE
      </h1>
      <div className="shop_items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-6 gap-8">
        {products.map((product) => {
          return <ShopItem key={product.id} {...product} onClick ={() =>{ addToCart(product.id)} } />;
        })}
      </div>
    </div>
  );
}

export default Shop;
