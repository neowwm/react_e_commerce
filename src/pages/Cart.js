import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);

  const totalPriceCalculator = () => {
    let totalPrice = 0;
    for (let i = 0; i < productData.length; i++) {
      totalPrice += productData[i].price * productData[i].quantity;
    }
    return totalPrice;
  };

  return (
    <div>
      <img className="w-full h-60 object-cover" src="" alt="CartImage" />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">Cart totals</h2>
            <p className="flex items-center gap-4 text-base">
              subtotal
              <span className="font-titleFont font-bold text-lg">200</span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping
              <span>
                lorem dolor sit amet consectetur adipisicing elit. Quos
              </span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
            total
            <span className="text-xl font-bold">
              {totalPriceCalculator()}
            </span>{" "}
          </p>
          <button className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">
            proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
