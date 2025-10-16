import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import TopSection from "../topnavbar/TopSection";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FaBars, FaTimes } from "react-icons/fa";
import AddCart from "../../addCart/adCartModel";
import { CartContext } from "../../context/cart";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  const handle = () => {
    setOpenAdd(true);
  };
  const handleClose = () => {
    setOpenAdd(false);
  };
  return (
    <>
      <TopSection />
      <nav className="relative bg-black top-0 shadow-lg z-auto">
        <div className="">
          <div className="md:w-auto w-full flex justify-between overflow-y-auto bg-black  fixed z-50 ">
            <div className="md:hidden block text-center my-5 py-2 mr-3 text-2xl font-bold">
              <Link to="/">
                <img
                  src="./logimage/logo.png"
                  className="absolute top-3 h-16 z-50 left-0 "
                />
              </Link>
            </div>
            <div className="flex" >
              <div className="flex space-x-5 mt-5  md:hidden ">
                <Link to={"/customer-signin"}>
                  <button className="flex ">
                    <svg
                      fill="none"
                      className="text-white"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      height="2em"
                      width="2em"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <path d="M16 7 A4 4 0 0 1 12 11 A4 4 0 0 1 8 7 A4 4 0 0 1 16 7 z" />
                    </svg>
                  </button>
                </Link>
                <button className="flex" onClick={handle}>
                  <LiaShoppingBagSolid
                    size={27}
                    className="cursor-pointer text-gray-200"
                  />
                  <span className="text-white text-xs absolute top-3  cursor-pointer rounded-full flex justify-center place-items-center bg-red-400 h-5 w-5">
                    {cartItems.length}
                  </span>
                </button>
                {openAdd && <AddCart handleClose={handleClose} />}
              </div>
              <div
                className="text-2xl font-medium mx-3 my-4 border rounded-lg p-2 text-white md:hidden block "
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <h1>
                    <FaTimes size={18} />
                  </h1>
                ) : (
                  <h1>
                    <FaBars size={18} />
                  </h1>
                )}
              </div>
            </div>
            {/* Mobile nav */}
            <ul
              className={`
        md:hidden z-50 bg-black fixed top-0 overflow-y-auto mt-16 bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
            >
              <NavLinks />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
