import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { SignLink } from "../signup/sgindata";
import { IoMdArrowDropdown } from "react-icons/io";
import { LiaShoppingBagSolid } from "react-icons/lia";
import NavLinks from "../Navbar/NavLinks";
import Modal from "./Modal";
import { CartContext } from "../../context/cart.jsx";
import AddCart from "../../addCart/adCartModel.jsx";
import { DialogWithForm } from "../userLogin/userLogin.jsx";

export default function TopSection() {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);



  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handle = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className="px-4 py-3 hidden md:block bg-black">
      <div className="md:flex flex-row py-4 justify-between">
        <div className="text-3xl font-bold">
          <Link to="/">
            <img
              src="./logimage/logo.png"
              className="absolute top-3 h-28 z-60 "
            />
          </Link>
        </div>
        <div className="md:flex hidden text-lg items-center justify-center gap-8 ml-6">
          <NavLinks />
        </div>
        <div className="flex space-x-5 mt-4 mr-12">
          <Link to={"/login"}>
            <button className="flex">
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
            <span className="text-white text-xs absolute top-9 right-14 cursor-pointer rounded-full flex justify-center place-items-center bg-red-400 h-5 w-5">
              {cartItems.length}
            </span>
          </button>
          {open && <AddCart handleClose={handleClose} />}
        </div>
      </div>

      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
}
