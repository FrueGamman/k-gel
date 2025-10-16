import React, { useState, useEffect, useContext } from "react";
import { IoCart } from "react-icons/io5";
import { RiFileHistoryFill } from "react-icons/ri";
import { FaCreditCard } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { BsFillCartDashFill } from "react-icons/bs";

export default function HomeUser() {

    return (
        <>
            <div className="bg-gray-900  min-h-screen   flex items-center justify-center">
                <div className="bg-gray-800 flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row max-w-6xl lg:space-x-10  sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
                    <div className="bg-gray-900 px-2 lg:px-4 py-2 lg:py-10 sm:rounded-xl flex lg:flex-col justify-between">
                        <nav className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
                            <a className="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover" href="#">
                                <IoCart />
                            </a>
                            <a className="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover" href="#">
                                <BsFillCartDashFill />
                            </a>
                            <a className="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover" href="#">
                                <RiFileHistoryFill />
                            </a>
                            <a className="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover" href="#">
                                <FaCreditCard />
                            </a>
                        </nav>
                        <div className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">

                            <a className="mt-12 text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover" href="#">
                                <FaUserCircle />
                            </a>
                            <a className="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 px-2 sm:px-0">
                        <div className="flex justify-between items-center">
                            <div className="flex">
                                <i className="fa fa-tint text-yellow-300" ></i> <span className="text-gray-100 text-sm ml-5 -mt-1">Friday, 6 Dec 2023</span>
                            </div>
                            <div className="flex justify-center">
                                <div className=" xl:w-96">
                                    <div className="relative  flex w-full flex-wrap items-stretch">
                                        <input
                                            type="search"
                                            className=" m-0 block w-[1%] min-w-0 flex-auto rounded-2xl border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1  font-normal text-sm outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                            placeholder="Search"
                                            aria-label="Search"
                                            aria-describedby="button-addon2"/>
                                    </div>
                                </div>
                            </div>
                            <div className="inline-flex items-center space-x-2">
                                <a className=" text-white/50 p-2 rounded-md hover:text-white smooth-hover" href="#">
                                    <i className="fa fa-moon-o"></i>
                                </a>
                                <a className=" text-white/50 p-2 rounded-md hover:text-white smooth-hover" href="#">
                                    <i className="fa fa-microphone"></i>
                                </a>
                                <a className=" text-white/50 p-2 rounded-md hover:text-white smooth-hover" href="#">
                                    <i className="fa fa-bell"></i>
                                </a>
                                <a className="inline-flex  bg-gray-900 text-white/90 p-2 rounded-full hover:text-white smooth-hover" href="#">
                                    <img className="w-8 h-8 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1533147670608-2a2f9775d3a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="dancing" />
                                    <span className="text-xs ml-2">Philbert <br/> ndzphilbert@gmail.com </span>
                                </a>
                            </div>
                        </div>
                        <div className="mb-10 sm:mb-0 mt-10 flex flex-wrap">
                            <div className="w-3/4 pr-2">
                                <div className="relative group bg-gray-900/80 px-6   cursor-pointer rounded-md hover:bg-gray-900/60 hover:smooth-hover">
                                    <div className="flex justify-between items-center py-4">
                                        <div className="flex">
                                            <span className="text-gray-100 text-lg -mt-1">Overall Shopping</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap py-4">
                                        <div className="w-1/4 p-1">
                                            <div className="bg-gray-900 rounded p-3">
                                                <div className="flex justify-between items-center py-2">
                                                    <div className="flex">
                                                        <span className="text-gray-400 text-xs font-bold -mt-1">Total Paid</span>
                                                    </div>
                                                    <div className="flex justify-between items-cente">
                                                    <span className="text-gray-400 text-xs font-bold -mt-1">
                                                        <i
                                                            className="fa fa-chevron-up text-green-700" aria-hidden="true"></i>
                                                    </span>
                                                        <span className="text-green-700 text-xs font-bold ml-1 -mt-1">+99%</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center py-1">
                                                    <div className="flex items-center">
                                                        <span className="items-center text-gray-200 text-xl font-bold -mt-1">Rwf 42,069</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/4 p-1">
                                            <div className="bg-gray-900 rounded p-3">
                                                <div className="flex justify-between items-center py-2">
                                                    <div className="flex">
                                                        <span className="text-gray-400 text-xs font-bold -mt-1">Discount</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                    <span className="text-gray-400 text-xs font-bold -mt-1">
                                                        <i className="fa fa-chevron-up text-green-700" aria-hidden="true"></i>
                                                    </span>
                                                        <span className="text-green-700 text-xs font-bold ml-1 -mt-1">+10%</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center py-1">
                                                    <div className="flex items-center">
                                                        <span className="items-center text-gray-200 text-xl font-bold -mt-1">Rwf 20,619</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/4 p-1">
                                            <div className="bg-gray-900 rounded p-3">
                                                <div className="flex justify-between items-center py-2">
                                                    <div className="flex">
                                                        <span className="text-gray-400 text-xs font-bold -mt-1">Total Delivery</span>
                                                    </div>
                                                    <div className="flex justify-between items-cente">
                                                    <span className="text-gray-400 text-xs font-bold -mt-1">
                                                        <i
                                                            className="fa fa-chevron-up text-green-700" aria-hidden="true"></i>
                                                    </span>
                                                        <span className="text-green-700 text-xs font-bold ml-1 -mt-1">+90%</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center py-1">
                                                    <div className="flex items-center">
                                                        <span className="items-center text-gray-200 text-xl font-bold -mt-1">Item, 15</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/4 p-1">
                                            <div className="bg-gray-900 rounded p-3">
                                                <div className="flex justify-between items-center py-2">
                                                    <div className="flex">
                                                        <span className="text-gray-400 text-xs font-bold -mt-1">Total Failed</span>
                                                    </div>
                                                    <div className="flex justify-between items-cente">
                                                    <span className="text-gray-400 text-xs font-bold -mt-1">
                                                        <i
                                                            className="fa fa-chevron-up text-red-700" aria-hidden="true"></i>
                                                    </span>
                                                        <span className="text-red-700 text-xs font-bold ml-1 -mt-1">+24%</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center py-1">
                                                    <div className="flex items-center">
                                                        <span className="items-center text-gray-200 text-xl font-bold -mt-1">RWF 1,212</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative group bg-gray-900 px-6 mt-4  cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                                    <div className="flex justify-between items-center py-4">
                                        <div className="flex">
                                            <span className="text-gray-100 text-lg -mt-1">Latest</span>
                                        </div>
                                    </div>
                                    <div className="w-full py-4">
                                        <div className="w-full overflow-x-auto">
                                            <table className="table-auto w-full bg-gray-200 rounded text-gray-800">
                                                <thead>
                                                <tr className="text-left border-b-2 border-blue-400">
                                                    <th className=" font-semibold  p-2">
                                                        Product
                                                    </th>
                                                    <th className=" font-semibold  p-2">
                                                        Quantity
                                                    </th>
                                                    <th className=" font-semibold  p-2">
                                                       Total Price
                                                    </th>
                                                    <th className=" font-semibold  p-2">
                                                        Date
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr className="bg-gray-100 hover:bg-gray-200 border-b border-blue-200">
                                                    <td className="p-2 text-sm">Pant Red</td>
                                                    <td className="p-2 text-sm">3</td>
                                                    <td className="p-2 text-sm">100,100 Rwf</td>
                                                    <td className="p-2 text-sm">17, July 2023</td>
                                                </tr>
                                                <tr className="bg-gray-100 hover:bg-gray-200 border-b border-blue-200">
                                                    <td className="p-2 text-sm">Pant Red</td>
                                                    <td className="p-2 text-sm">3</td>
                                                    <td className="p-2 text-sm">100,100 Rwf</td>
                                                    <td className="p-2 text-sm">17, July 2023</td>
                                                </tr>
                                                <tr className="bg-gray-100 hover:bg-gray-200 border-b border-blue-200">
                                                    <td className="p-2 text-sm">Pant Red</td>
                                                    <td className="p-2 text-sm">3</td>
                                                    <td className="p-2 text-sm">100,100 Rwf</td>
                                                    <td className="p-2 text-sm">17, July 2023</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                    <div className="w-full">
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/4 pl-2">
                                <div className="relative group bg-gray-900 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">

                                    <div className=" rounded py-3">
                                        <div className="flex justify-between items-center py-2">
                                            <div className="flex justify-between items-center">
                                                <a className="inline-flex  bg-orange-800 hover:bg-orange-500/20 text-white/90 p-3 rounded hover:text-white smooth-hover" href="#">
                                                    <IoCart />
                                                </a>
                                                <span className="text-xs text-gray-500 ml-3">MY CART</span>

                                            </div>
                                        </div>
                                        <div className="bg-gray-800 rounded-xl mt-6 py-3 px-4 text-center">
                                            <div className="">
                                                <div className="">
                                                    <span className="text-gray-400 text-xs font-bold ">Items</span>
                                                </div>
                                                <div className="text-center">
                                                    <span className="text-center text-gray-200 text-xl font-bold">Rwf 80,089</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center pt-2">
                                            <span className="text-gray-400 text-xs font-bold -mt-1">Official Website
                                                    <i className="fa fa-external-link text-red-700 ml-2" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                        <div className="items-center py-8  text-whit">

                                        </div>
                                        <div className="flex justify-between border border-gray-300 items-center rounded-xl">
                                            <div className="inline-flex items-center">
                                                <a className="inline-flex text-white/90 p-2 rounded hover:text-white smooth-hover" href="#">
                                                    <i className="fa fa-clock-o text-gray-300"></i>
                                                </a>
                                            </div>
                                            <div className="flex">
                                                <span className="text-gray-100 text-xs -mt-1">08 Nov - 17 Now</span>
                                            </div>
                                            <div className="inline-flex items-center">
                                                <a className="inline-flex text-white/90 p-2 rounded hover:text-white smooth-hover" href="#">
                                                    <i className="fa fa-angle-down text-gray-300"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center rounded-xl mt-5">
                                            <div className="flex">
                                                <span className="text-gray-100 text-xs -mt-1">Delivered </span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-gray-100 text-xs -mt-1">Rwf 17,112</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center rounded-xl mt-5">
                                            <div className="flex">
                                                <span className="text-gray-100 text-xs -mt-1">Pending</span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-gray-100 text-xs -mt-1">Rwf 300,00</span>
                                            </div>
                                        </div>
                                        <div className="text-center rounded-xl mt-5">
                                            <button className="border w-full text-center border-orange-500 hover:bg-orange-500 hover:bg-opacity-30 font-bold py-1 px-4 rounded-xl ">
                                                <span className="text-orange-500 text-center text-sm">Buy</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
