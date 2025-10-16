// @ts-ignore
import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import api from "../utils/api-call";
import { apiUrl } from "../utils/env";
import { backEndPoints } from "../utils/enum";
import Card_eco from "../components/modal/card_eco";
import Wrapper from "./Wrapper/wrapper";
import SliderContainer from "./slider";

export default function home() {
  const [loading, setLoading] = useState(true);
  const [dataSuit, setData] = useState([]);
  const [categort, setCategory] = useState([]);
  const [hightlight, setHighlight] = useState([]);
  const [dataPant, setWedding] = useState([]);


  console.log(categort);

  useEffect(() => {
    const getCategory = async () => {
      setLoading(true);
      try {
        const response = await api.get(`${backEndPoints.CATEGORY}`);
        if (response.data.length > 0) {
          setCategory(response.data);
          setLoading(false);
        }
      } catch (err) {
        console.log('Failed to load category');
      }
    };
    getCategory();
  }, []);

  useEffect(() => {
    const getHight = async () => {
      setLoading(true);
      try {
        const response = await api.get(`${backEndPoints.HIGHTLIGHT}`);
        if (response.data.length > 0) {
          setHighlight(response.data);
          setLoading(false);
        }
      } catch (err) {
        console.log("failed ");
      }
    };
    getHight();
  }, []);

  //let fetch information
  useEffect(() => {
    // async await
    // @ts-ignore
    const getSuit = async () => {
      setLoading(true);
      try {
        const response = await api.get(`${backEndPoints.CLOTHES}`);
        if (response.data.length > 0) {
          setData(response.data);
          setLoading(false);
        }
      } catch (err) {
        console.log("Error");
      }
    };
    getSuit();
  }, []);

  const [dataBest, setBestData] = useState([]);
  //let fetch information
  useEffect(() => {
    // async await
    // @ts-ignore
    const getBest = async () => {
      setLoading(true);
      try {
        const response = await api.get(`${backEndPoints.BESTSELL}`);
        if (response.data.length > 0) {
          setBestData(response.data);
          setLoading(false);
        }
      } catch (err) {
        console.log("failed to load");
      }
    };
    getBest();
  }, []);

  useEffect(() => {
    const getSuit = async () => {
      try {
        const response = await api.get(`${backEndPoints.FILTER_CLOTHERS_WEDDING}`);
        if (response.data.length > 0) {
          setWedding(response.data);
        }
      } catch (err) {
        console.log("Error");
      }
    };
    getSuit();
  }, []);

  return (
    <div className="bg-black">
      <section className="md:h-[600px] h-[50vh]  bg-cover  mx-4 font-[Intel]">
        <div className="h-screen md:h-[600px] bg-black bg-opacity-60 ">
          <div className="relative h-screen z-0">
            <video
              autoPlay
              muted
              loop
              className=" absolute inset-0 w-full h-[55vh] md:h-[90vh] object-cover"
            >
              <source src="./empire.mp4" type="video/mp4" />
            </video>
            <div className=" relative grid lg:grid-cols-2   text-center items-center h-3/4">
              <div className="hidden md:block"></div>
              <div className="flex flex-col items-center mt-5 md:mt-24">
                <h2 className="text-white px-2 mt-4 text-xl font-medium uppercase ">
                  Get Far out
                </h2>
                <h1 className="md:text-6xl text-5xl text-white py-5 ">
                  Fit for Now,<br></br>
                  Fit For Later
                </h1>
                <div className="text-xl">
                  <Link to={"/Shop/suits"}>
                    <Button />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex text-white flex-col justify-center items-center my-12 mt-28 leading-loose">
        <div className="text-5xl text-center">Find Your Fit in 5 Minutes.</div>
        <div className="text-xl font-medium my-4 text-center">
          Not sure what'll fit? We'll walk you through it.{" "}
        </div>
        <button className="bg-yellow-600 text-black py-3  px-12 font-medium  hover:bg-white">
          Find Your fit
        </button>
      </div>
      <section className="mx-8  my-8 ">
        <h1 className="font-semibold text-xl text-white">
          Featured Highlights
        </h1>
        <SliderContainer />
        
      </section>
      <section className="mx-8 my-8 ">
        <h1 className="font-semibold text-xl text-white">
          Featured Cotegories
        </h1>
        <div className="">
          <div className="grid lg:grid-cols-2 justify-center items-center my-4 gap-5 z-0">
            {categort?.map((items, index) => {
              return (
                <Link to={`/detail/${items.cloth.id}`}>
                  <div key={index} className=" cursor-pointer">
                    <div className="w-full max-h-[600px] overflow-hidden">
                      <img
                        className="w-full h-[600px] rounded bg-cover  transition  cursor-pointer object-cover duration-700 hover:scale-110 "
                        src={`${apiUrl}/media/${items.cloth.image}`}
                      />
                    </div>
                    <div className="flex flex-row mt-2 justify-between mx-2 object-cover">
                      <p className="font-semibold text-white">{items.name}</p>
                      <BsArrowRight size={24} className="white" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <Wrapper />
      <section className=" cursor-pointer my-12 m-4 bg-cover  bg-suit h-[40rem] bg-center">
        <div className="md:w-1/2 w-full">
          <div className=" py-24 leading-loose  h-[40rem] justify-center bg-black bg-opacity-30  ">
            <div className="text-2xl font-serif text-gray-50 my-8 px-4 text-center">
              Elevate Your style <br></br>{" "}
            </div>
            <div className="font-medium  text-gray-100 px-4 text-center">
              <span className="md:text-7xl text-3xl font-serif">
                RICHMENLOOKS
              </span>
              <br></br>
              <span className="font-serif text-2xl">Men's Boutique</span>
            </div>
            <button className="bg-gray-200 text-black flex items-center mx-auto my-12  py-3 px-12 font-medium">
              Shop now
            </button>
          </div>
        </div>
      </section>
      <section className="md:mx-24 overflow-auto my-2 max-x-4xl">
        <h1 className="font-semibold text-2xl my-3 text-white">Best Seller</h1>
        <div className="flex gap-8">
          {dataBest.map((item, index) => {
            return (
              <div>
                <Card_eco
                  items={item}
                  src={`${apiUrl}/media/${item.cloth.image}`}
                  name={item.cloth.name}
                  description={item.cloth.detail}
                  id={item.cloth.id}
                  price={item.cloth.price}
                  rate={item.cloth.rating}
                />
              </div>
            );
          })}
        </div>
      </section>

      <section className="md:mx-24 overflow-auto py-6 max-x-4xl">
        <h1 className="font-semibold text-2xl my-3 text-white">
          Recommended For You
        </h1>
        <div className="flex gap-8 ">
          {dataSuit.map((item, index) => {
            return (
              <div>
                <Card_eco
                  items={item}
                  src={`${apiUrl}${item.image}`}
                  name={item.name}
                  description={item.detail}
                  id={item.id}
                  price={item.price}
                  color={item.color}
                  rate={item.rating}
                />
              </div>
            );
          })}
        </div>
      </section>
      <section className="bg-cover  bg-wedding h-[40rem] bg-center">
        <div className="w-full">
          <div className=" py-24 leading-loose w-full  h-[40rem] justify-center bg-black bg-opacity-70  ">
            <div className="text-6xl text-gray-50 my-8 px-4 text-center">
              Suit Up <br></br>for the Big Day{" "}
            </div>
            <div className="text-2xl font-medium text-gray-100 px-4 text-center">
              Whether you are guest, the groom , or a <br></br>
              groomsman , show up in your Empire mens wear
            </div>
            <button className="bg-gray-200 text-black flex items-center mx-auto my-12  py-3 px-12 font-medium">
              Find Your fit
            </button>
          </div>
        </div>
      </section>
      <section className="md:mx-24  px-3 overflow-auto py-6 max-x-5xl scroll-smooth md:scroll-auto">
        <h1 className="font-semibold text-2xl my-3 text-white">
          Wedding event{" "}
        </h1>
        <div className="flex gap-8 ">
          {dataPant.map((item, index) => {
            return (
              <div>
                <Card_eco
                  items={item}
                  src={`${apiUrl}${item.image}`}
                  name={item.name}
                  description={item.detail}
                  id={item.id}
                  price={item.price}
                  rate={item.rating}
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
