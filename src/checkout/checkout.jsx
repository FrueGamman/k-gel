import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/cart";
import { apiUrl } from "../utils/env";
import { backEndPoints, empireToken } from "../utils/enum";
import { Link } from "react-router-dom";
import api from "../utils/api-call";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ShippingOptions = [
  { type: "delivery", cost: 100 },
  { type: "pickup", cost: 0 },
];

export default function Checkout() {
  const { cartItems, getCartTotal,clearCart } = useContext(CartContext);
  const [selectedShipping, setSelectedShipping] = useState("delivery");
  const [userData, setUserData] = useState({
    email: localStorage.getItem(empireToken.EMAIL) ?? "",
    fullname:localStorage.getItem(empireToken.FULLNAME) ?? "",
    country: "",
    address: "",
    method: selectedShipping,
    city: localStorage.getItem(empireToken.ADDRESS) ?? "",
    phonenumber: localStorage.getItem(empireToken.TELEPHONE) ?? "",
  });


  const notifyRemovedFromCart = (item) => toast.success(`Thank ${item.full_name} for purchasing in Empiremenswear to process payment make login to pay`, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true, 
    draggable: true,
    theme: 'colored',
    style: {
      backgroundColor: 'green',
      color: '#fff',
    },
  });

  const userExisted = localStorage.getItem(empireToken.USERTOKEN)


  const HandleFormSubmit = async (e) => {
    e.preventDefault()
    try {
    const data = {
      email: userData.email,
      full_name: userData.fullname,
      country: userData.country,
      billingStreet: userData.address,
      method: userData.method,
      phonenumber: userData.phonenumber,
      city: userData.city,
      total_amount:getCartTotal(),
      shop: JSON.stringify(cartItems),
      userId: localStorage.getItem(empireToken.USER_ID)
    }
      const  response  = await api.post(`${backEndPoints.PAYMENT}`,data)
      if(response.status === 200) {
        notifyRemovedFromCart(response.data.payment_data);
        setTimeout(() =>{
          window.location.href = `${response.data.payment_link}`
          clearCart()
        },4000)
      }
    } catch (error) {
      toast.error('All fields should have a value, please check again')
    }
  }

  const handleShippingChange = (event) => { 
    setSelectedShipping(event.target.value);
  };

  const handleUserDataChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const shippingCost =
    ShippingOptions.find((option) => option.type === selectedShipping)?.cost ||
    0;

  const getCartTotalAll = () => {
    const itemsTotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return itemsTotal + shippingCost;
  };

  return (
    <>
    <ToastContainer />
      <div class="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <a href="#" class="text-2xl font-bold text-gray-800">
          Empiremenswear
        </a>
        <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div class="relative">
            <ul class="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li class="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                  href="#"
                >
                  3
                </a>
                <span class="font-semibold text-gray-500">Payment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div class="px-4 pt-8">
          <p class="text-xl font-medium">Order Summary</p>
          <p class="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {cartItems.map((item,index) => {
              return (
                <div key={index} class="flex flex-col rounded-lg bg-white sm:flex-row">
                  <img
                    class="m-2 h-24 w-28 rounded-md border object-cover object-center"
                    src={`${apiUrl}${item.image}`}
                    alt=""
                  />
                  <div class="flex w-full flex-col px-4 py-4">
                    <span class="font-semibold">{item.name}</span>
                    <span class="float-right text-gray-400">42EU - 8.5US</span>
                    <p class="text-lg font-bold">${item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <p class="mt-8 text-lg font-medium">Shipping Methods</p>
          <form class="mt-5 grid gap-6">
            <div class="relative">
              <input
                class="peer hidden"
                id="radio_1"
                type="radio"
                name="radio"
                value={"delivery"}
                checked={selectedShipping === "delivery"}
                onChange={handleShippingChange}
              />
              <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                for="radio_1"
              >
                <img
                  class="w-14 object-contain"
                  src="https://assets.materialup.com/uploads/bb21c177-8493-43c8-b305-39aa2fb0cc2b/preview.gif"
                  alt=""
                />
                <div class="ml-5">
                  <span class="mt-2 font-semibold">Transport Delivery</span>
                  <p class="text-slate-500 text-sm leading-6">
                    Delivery: 3-4 Days
                  </p>
                </div>
              </label>
            </div>
            <div class="relative">
              <input
                class="peer hidden"
                id="radio_2"
                type="radio"
                name="radio"
                value={"pickup"}
                checked={selectedShipping === "pickup"}
                onChange={handleShippingChange}
              />
              <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                for="radio_2"
              >
                <img
                  class="w-14 object-contain"
                  src="data:image/png;base64,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"
                  alt=""
                />
                <div class="ml-5">
                  <span class="mt-2 font-semibold">Pick up Delivery</span>
                  <p class="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
          </form>
        </div>
        <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p class="text-xl font-medium">Billing Details</p>
          <p class="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <div class="">
            <label for="email" class="mt-4 mb-2 block text-sm font-medium">
              Email
            </label>
            <div class="relative">
              <input
                type="text"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleUserDataChange}
                class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="your.email@gmail.com"
              />
              <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
            </div>
            <label
              for="card-holder"
              class="mt-4 mb-2 block text-sm font-medium"
            >
              Full name
            </label>
            <div class="relative">
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={userData.fullname}
                onChange={handleUserDataChange}
                class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your full name here"
              />
              <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>
              </div>
            </div>
            <label for="card-no" class="mt-4 mb-2 block text-sm font-medium">
              Country
            </label>
            <div class="flex">
              <div class="relative w-7/12 flex-shrink-0">
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={userData.country}
                  onChange={handleUserDataChange}
                  class="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Country"
                />
                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    class="h-4 w-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                  </svg>
                </div>
              </div>
              <input
                type="text"
                name="city"
                value={userData.city}
                onChange={handleUserDataChange}
                class="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="city"
              />
            </div>
            <label
              for="billing-address"
              class="mt-4 mb-2 block text-sm font-medium"
            >
              Address
            </label>
            <div class="flex flex-col">
              <div class="relative flex-shrink-0">
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={userData.address}
                  onChange={handleUserDataChange}
                  class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Street Address"
                />
                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3"></div>
              </div>
            </div>
            <label
              for="billing-address"
              class="mt-4 mb-2 block text-sm font-medium"
            >
              Phonenumber
            </label>
            <div class="flex flex-col">
              <div class="relative flex-shrink-0">
                <input
                  type="text"
                  id="billing-address"
                  name="phonenumber"
                  value={userData.phonenumber}
                  onChange={handleUserDataChange}
                  class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Phonenumber"
                />
                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3"></div>
              </div>
            </div>

            <div class="mt-6 border-t border-b py-2">
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">Subtotal</p>
                <p class="font-semibold text-gray-900">${getCartTotal()}</p>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">Shipping</p>
                <p class="font-semibold text-gray-900">${shippingCost}</p>
              </div>
            </div>
            <div class="mt-6 flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Total</p>
              <p class="text-2xl font-semibold text-gray-900">
                ${getCartTotalAll()}
              </p>
            </div>
          </div>
          {
            userExisted && userExisted != null ? (
              <button
                onClick={(e) => { HandleFormSubmit(e) }}
                class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
                Place Order
              </button>
            ) : (
              <Link to={'/create-account'}>
              <button
                class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
                Create account
              </button>
              </Link>
            )
          }

        </div>
      </div>
    </>
  );
}
