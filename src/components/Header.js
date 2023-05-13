import React from "react";
import { cart, logoDark } from "../assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  let sum = 0;
  for (let i = 0; i < productData.length; i++) {
    sum = sum + productData[i].quantity;
  }

  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-28" src={logoDark} alt="logoDark" />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
              pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
              Blog
            </li>
          </ul>
          <Link to="cart">
            <div className="relative">
              <img className="w-14" src={cart} alt="oh-lala" />
              <span className="absolute w-6 top-4 left-5 text-sm flex items-center justify-center font-semibold">
                {sum}
              </span>
            </div>
          </Link>
          <img
            className="w-8 h-8 rounded-full"
            src="https://images.pexels.com/photos/2871490/pexels-photo-2871490.jpeg"
            alt="userLogo"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
