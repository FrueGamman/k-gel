import React, { useState, useContext } from "react";
import { CartContext } from "../context/cart";
import { apiUrl } from "../utils/env";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

function AddCart() {
  const { cartItems, getCartTotal, addToCart, removeFromCart } = useContext(CartContext);

  const notifyRemovedFromCart = (item) => toast.error(`${item.name} removed from cart!`, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    style: {
      backgroundColor: '#000',
      color: '#fff',
    },
  });

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    notifyRemovedFromCart(product);
  };

  return (
    <div className=" container mx-auto py-14">
      <ToastContainer />
      <div className="flex flex-col md:flex-row overflow-scroll my-10 rounded">
        <div className="w-full md:w-3/4 bg-white px-4 md:px-10 py-10">
          <div className="flex justify-between pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          </div>
          <div className="flex flex-wrap mt-10 mb-5 border-b-2 pb-2">
            <h3 className="font-semibold text-red-600 text-xs uppercase w-full md:w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-red-600 text-xs uppercase w-full md:w-1/5 text-center">
              Quantity
            </h3>
            <h3 className="font-semibold text-red-600 text-xs uppercase w-full md:w-1/5 text-center">
              Price
            </h3>
          </div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row items-center hover:bg-gray-100 -mx-4 px-6 py-5 border-b pb-8">
              <div className="flex w-full md:w-2/5">
                <div className="w-20 md:w-24">
                  <img className="h-24 md:h-32" src={`${apiUrl}${item.image}`} alt="" />
                </div>
                <div className="flex flex-col justify-around ml-4 flex-grow">
                  <span className="font-bold text-sm">{item.name} </span>
                  <span className="font-bold text-xs">{item.size} </span>
                  <a
                    href="#"
                    className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                  >
                    Remove
                  </a>
                </div>
              </div>
              <div className="flex justify-center w-full md:w-1/5 mt-4 md:mt-0">
                <div className="flex gap-4">
                  <button
                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => {
                      addToCart(item);
                    }}
                  >
                    +
                  </button>
                  <p className="text-black">{item.quantity}</p>
                  <button
                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => {
                      const cartItem = cartItems.find((product) => product.id === item.id);
                      if (cartItem.quantity === 1) {
                        handleRemoveFromCart(item);
                      } else {
                        removeFromCart(item);
                      }
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
              <span className="text-center w-full md:w-1/5 mt-4 md:mt-0 font-semibold text-sm">
                ${item.price}
              </span>
            </div>
          ))}
          <a
            href="/"
            className="flex font-semibold text-indigo-600 text-sm mt-10 border p-3 w-fit"
          >
            <svg
              className="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </a>
        </div>

        <div id="summary" className="w-full md:w-1/4 px-4 md:px-8 py-3 border-l mt-4 md:mt-0">
          <h1 className="font-semibold text-2xl border-b pb-8 inline-block">
            Cart Total
          </h1>
          <div className="flex justify-between mt-4 mb-5">
            <span className="font-semibold text-sm uppercase">Total:</span>
            <span className="font-semibold text-sm">${getCartTotal()}</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div className="py-3"></div>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>${getCartTotal()}</span>
            </div>
            <Link to='/checkout'>
              <button className="black font-semibold hover:bg-black py-3 text-sm text-white uppercase w-full">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCart;
