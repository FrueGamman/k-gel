import React, { useState, useEffect } from "react";
import api from "../utils/api-call";
import { apiUrl } from "../utils/env";
import { backEndPoints } from "../utils/enum";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      {/* Your custom previous arrow icon or content */}
      Previous
    </div>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      {/* Your custom next arrow icon or content */}
      Next
    </div>
  );
};


export default function SliderContainer() {
  const [hightlight, setHighlight] = useState([]);
  useEffect(() => {
    const getHight = async () => {
      try {
        const response = await api.get(`${backEndPoints.HIGHTLIGHT}`);
        if (response.data.length > 0) {
          setHighlight(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getHight();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="w-full mx-auto my-4 gap-5 z-0">
        <Slider {...settings} className="mx-6">
          {hightlight.map((items, index) => {
            return (
              <div key={index} className="mx-6">
                <Link to={`/filter-clothes`}>
                  <div key={index} className="cursor-pointer ">
                    <div className="md:w-full max-h-[600px] overflow-hidden ">
                      <img
                        className="h-[300px] w-full rounded transition  cursor-pointer  object-cover duration-700 hover:scale-110 "
                        src={`${apiUrl}/media/${items.cloth.image}`}
                      />
                    </div>
                    <div class="flex flex-row justify-between items-center mt-3 mx-2">
                      <div class="flex flex-col">
                        <h3 class="font-medium text-[15px] text-black">{items.name}</h3>
                        <a class="text-sm text-[#7F7F7F]" href="#">
                          Explore Now!
                        </a>
                      </div>
                      <div>
                        <BsArrowRight size={24} className="text-[#7F7F7F]" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

