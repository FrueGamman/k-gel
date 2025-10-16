import React, { useState, useEffect } from "react";
import { apiUrl } from "../../utils/env";
import api from "../../utils/api-call";
import { backEndPoints } from "../../utils/enum";
import { Link } from "react-router-dom";

export default function Follow() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const GetFollow = async () => {
      try {
        const response = await api.get(`${backEndPoints.FOLLOW_US}`);
        if (response.data.length > 0) {
          setData(response.data);
        }
      } catch (err) {
        console.log("Error");
      }
    };
    GetFollow();
  }, []);

  return (
    <div>
      <div class="2xl:container md:py-0 lg:px-0 md:px-6 py-9 px-2 ">
        <div class="text-center">
          <h2 class="font-semibold lg:text-3 xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto">
            Follow Us on Instagram
          </h2>
          <p class="font-normal text-sm leading-6 dark:text-gray-400 text-gray-600 mt-4 lg:w-5/12 md:w-9/12 mx-auto">
            Follow us on instagram @
            <span class="underline cursor-
            
            
            ">followuspleaseee</span> and
            tag us to get featured on our timeline
          </p>
        </div>
        <div class="grid md:grid-cols-6 sm:grid-cols-2 grid-cols-1 lg:grap-8 md:gap-0 gap-4 mt-10">
          {data.map((items, index) => {
            return (
              <>
                <div class="overflow-hidden cursor-pointer">
                  <div class="relative group  transition duration-700 hover:scale-110">
                    <div className="overflow-hidden">
                      <img
                        src={`${apiUrl}${items.image}`}
                        alt="A picture of a sitting dog"
                        class="lg:block hidden h-[300px] w-full  object-cover transition duration-700 hover:scale-110"
                      />
                    </div>

                    <div className="overflow-hidden">
                      <img
                        src={`${apiUrl}${items.image}`}
                        alt="A picture of a sitting dog"
                        class="lg:hidden block h-[300px] w-full  transition object-cover duration-700 hover:scale-110"
                      />
                    </div>
                    <a href={`${items.link}`} target="_blank">
                      <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                      <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                        <svg
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M42.6665 10.6665H21.3332C15.4421 10.6665 10.6665 15.4421 10.6665 21.3332V42.6665C10.6665 48.5575 15.4421 53.3332 21.3332 53.3332H42.6665C48.5575 53.3332 53.3332 48.5575 53.3332 42.6665V21.3332C53.3332 15.4421 48.5575 10.6665 42.6665 10.6665Z"
                            stroke="white"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40Z"
                            stroke="white"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M44 20V20.001"
                            stroke="white"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
