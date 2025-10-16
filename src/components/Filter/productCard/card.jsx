import React, { useContext } from 'react'
import { apiUrl } from '../../../utils/env'
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/cart';

export default function BestSeller({ src, name, type, price, star, id, description }) {
    const { cartItems, addToCart } = useContext(CartContext);
    return (
        <div class="my-10 flex ">
            <div className="mx-3 ">
                <div key={id} className="cursor-pointer ">

                    <div className="w-full md:h-[300px] overflow-hidden ">
                        <img
                            className="md:h-[300px] md:w-full w-fit  transition  cursor-pointer  object-cover duration-700 hover:scale-110 "
                            src={src}
                        />
                    </div>

                    <div class="mt-3 md:mx-2">
                        <div class="flex justify-between place-content-center items-center">
                            <div className="flex flex-col gap-2">
                                <h3 class="font-medium md:text-[15px] text-[10px]  text-black">{name}</h3>
                                <a
                                    class="md:text-sm flex justify-between w-full  text-[10px]  text-[#7F7F7F]"
                                    href="#"
                                >
                                    ${price} <del className="text-red-500">$550</del>
                                </a>
                            </div>
                            <span
                                className="hidden md:block"
                                onClick={() => {
                                    addToCart(items);
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="15"
                                    fill="currentColor"
                                    class="bi bi-bag-plus"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                                    />
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}