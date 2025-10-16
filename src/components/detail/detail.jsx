import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { apiUrl } from "../../utils/env";
import api from "../../utils/api-call";
import { backEndPoints } from "../../utils/enum";
import StarRating from "../start";
import { CartContext } from "../../context/cart";
import { BsHandIndexThumb } from "react-icons/bs";

function Detail() {
  const { cartItems, addToCart, removeFromCart, handleRemoveFromCart } =
    useContext(CartContext);
  const [data, setData] = useState([]);
  const [hightlight, setHighlight] = useState([]);
  const { id } = useParams();
  const [activeImg, setActiveImage] = useState("");
  useEffect(() => {
    const getSingleCloth = async () => {
      try {
        const response = await api.get(backEndPoints.SINGLE_CLOTHES + id);
        setData(response.data);
        setActiveImage(response.data.image);
      } catch (error) {
        console.log(error);
      }
    };

    getSingleCloth();
  }, []);

  useEffect(() => {
    const getHight = async () => {
      try {
        const response = await api.get(`${backEndPoints.HIGHTLIGHT}`);
        if (response.data.length > 0) {
          setHighlight(response.data);
        }
      } catch (err) {
        console.log(err.response);
      }
    };
    getHight();
  }, []);
  const cartItem = cartItems.find((product) => product.id === data.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  const [style, setStyle] = useState({
    transformOrigin: "50% 50%",
    transform: "scale(1)",
  });

  const handleMouseOver = (event) => {
    const boundingBox = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - boundingBox.left) / boundingBox.width) * 100;
    const y = ((event.clientY - boundingBox.top) / boundingBox.height) * 100;

    setStyle({
      transformOrigin: `${x}% ${y}%`,
      transition: "transform 0.3s ease",
      transform: "scale(2)",
    });
  };

  const handleMouseOut = () => {
    setStyle({
      transformOrigin: "center",
      transition: "transform 1s ease ",
      transform: "scale(1)",
    });
  };

  

  const size = [
    "36US-46EU",
    "38US-48EU",
    "40US-50EU",
    "42US-52EU",
    "44US-54EU",
    "46US-56EU",
    "48US-58EU",
    "50US-60EU",
  ];

  const [selectedSize, setSelectedSize] = useState(size[0]);


console.log(data)
  return (
    <section class="overflow-hidden bg-white py-11 md:mt-2 font-poppins">
      <div class="max-w-6xl px-2 py-4 mx-auto md:mt-2 mt-12  lg:py-8 md:px-6">
        <div class="flex flex-wrap mx-2">
          <div class="w-full px-4 md:w-1/2 lg:w-[50%]">
            <div className="flex flex-col gap-2 ">
              <div className="border-2 p-1 overflow-hidden">
                <img
                  src={`${apiUrl}${activeImg}`}
                  alt=""
                  className="w-full h-full aspect-square object-cover rounded cursor-pointer "
                  style={{ ...style }}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                />
              </div>
              <div className="flex flex-row justify-between gap- h-24">
                {[
                  data?.image,
                  data?.image_1,
                  data?.image_2,
                  data?.image_3,
                  data?.image_4,
                ].map((img, index) => (
                  <img
                    key={index}
                    src={`${apiUrl}${img}`}
                    alt=""
                    className={`md:w-24 h-14 md:h-24 rounded-md cursor-pointer ${
                      activeImg.includes(img)
                        ? "border-2 border-yellow-500 p-1 rounded-md"
                        : ""
                    }`}
                    onClick={() => setActiveImage(img)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 ">
            <div class="lg:pl-10">
              <div class="mb-2 ">
                <h2 class="max-w-xl my-4 text-2xl font-bold dark:text-gray-600 md:text-4xl">
                  {data.name}
                </h2>
                <div class="flex items-center">
                  <StarRating data={data.rating} />
                </div>
                <p class="max-w-md text-base my-4 text-gray-700 dark:text-gray-600">
                  {data.detail}
                </p>
                <p class="inline-block my-4 text-xl font-bold text-gray-700 dark:text-gray-600 ">
                  <span>${data.price}</span>
                </p>
              </div>
              <div class="items-center mb-8">
                <h2 class=" text-base font-bold dark:text-gray-600">Size: {selectedSize}</h2>
                <div class="flex-1 -mx-2 -mb-2">
                  <select className="border p-2 w-full rounded focus:border bg-white" onChange={(event)=>{setSelectedSize(event.target.value)}}>
                    {size.map((sizeOption) => (
                      <option value={sizeOption}>
                        {sizeOption}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div class="grid lg:grid-row-2 gap-3  items-center -mx-4 ">
                <Link to={"/add_cart"}>
                  <div class="w-full px-4 mb-4  lg:mb-0">
                    <button
                      onClick={() => {
                        
                        addToCart(data,selectedSize);
                      }}
                      class="flex items-center justify-center text-gray-100 w-full p-4 black border border-black hover:text-gray-100  dark:hover:text-gray-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                </Link>
              </div>
              <div className="md:flex justify-between my-8 hidden">
                <span className="font-bold cursor-pointer">The order is customer made</span>
                <span className="font-bold cursor-pointer">Ask question on {data.name}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class=" my-12 w-full">
            <h1 className="font-semibold my-8 mx-12 md:text-2xl text-sm text-black ">
              Related Products
            </h1>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-1 justify-center place-content-center">
              {hightlight.map((items, index) => {
                return (
                  <div key={BsHandIndexThumb} className="mx-6">
                    <Link to={`/filter-clothes`}>
                      <div key={index} className="cursor-pointer ">
                        <div className="md:w-full max-h-[600px] overflow-hidden ">
                          <img
                            className="md:h-[300px] md:w-full w-fit rounded transition  cursor-pointer  object-cover duration-700 hover:scale-110 "
                            src={`${apiUrl}/media/${items.cloth.image}`}
                          />
                        </div>
                        <div class="flex flex-row justify-between items-center mt-3 mx-2">
                          <div class="flex flex-col">
                            <h3 class="font-medium md:text-[15px] text-[10px] text-black">
                              {items.name}
                            </h3>
                            <a class="text-sm text-[#7F7F7F] text-[10px]" href="#">
                              Explore more
                            </a>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Detail;
