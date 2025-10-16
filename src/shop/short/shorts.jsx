import React,{useContext, useEffect,useState} from 'react'
import { featuredHighlight } from '../../home/data'
import ProductCard from '../ProductCard'
import api from '../../utils/api-call'
import { backEndPoints } from '../../utils/enum'
import {apiUrl} from "../../utils/env";
import StarRating from "../../components/start";
import {Link} from "react-router-dom";
import { CartContext } from '../../context/cart'


export default function Shorts() {
   const {addToCart} = useContext(CartContext)

    const [loading, setLoading] = useState(true)
    const [dataShort, setData] = useState([]);
    useEffect(() => {
            const getSuit = async () => {
                setLoading(true);
                try {
                    const response = await api.get(`${backEndPoints.FILTER_CLOTHERS_SHORT}`)
                    if (response.data.length > 0) {
                        setData(response.data)
                        setLoading(false);
                    }
                } catch (err) {
                    console.log("Failed to load")
                }
            }
            getSuit()
        },
        []
    );


  return (
    <div className='md:mx-24  py-12 max-x-4xl'>
    <section class="grid md:grid-cols-5 grid-cols-2 sm:grid-cols-2  justify-center place-content-center md:mx-1">
        {dataShort.map((item, index) => {
          return (
            <div class="my-10 flex " key={index}>
              <div className="mx-6">
                <div key={index} className="cursor-pointer ">
                  <Link to={`/detail/${item.id}`}>
                    <div className="w-full max-h-[300px] overflow-hidden ">
                      <img
                        className="md:h-[300px] md:w-full w-fit  rounded transition  cursor-pointer  object-cover duration-700 hover:scale-110 "
                        src={`${apiUrl}${item.image}`}
                      />
                    </div>
                  </Link>
                  <div class="flex justify-between place-content-center items-center">
                    <div className="flex flex-col">
                      <h3 class="font-medium md:text-[15px] text-[10px]  text-black">
                        {item.name}
                      </h3>
                      <a
                        class="md:text-sm text-[10px]  text-[#7F7F7F]"
                        href="#"
                      >
                        {item.price} <del className="text-red-400">550</del>
                      </a>
                    </div>
                    <span
                      onClick={() => {
                        addToCart(item);
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
          );
        })}
      </section>
  </div >
  )
}
