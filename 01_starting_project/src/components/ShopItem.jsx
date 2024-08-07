import Button from "./Button";


function ShopItem({image, title, price, description, ...props }) {
  return (
    <div className="bg-[#5F4E33] rounded-md flex flex-col ">
      <img src={image} className="rounded-md w-full" />
      <div className="p-4 flex flex-col justify-between h-full gap-8">
        <div className="content">
          <h2 className="text-offYellow text-[20px] font-semibold pt-2">
            {title}
          </h2>
          <p className="text-[#D1B68B] pb-4 text-lg">${price}</p>
          <p className="text-mainText text-sm">{description}</p>
        </div>

        <p className=" text-right">
          <Button {...props}>Add to Cart</Button>
        </p>
      </div>
    </div>
  );
}

export default ShopItem;
