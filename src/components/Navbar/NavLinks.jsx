import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div className="z-10">
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-4 flex justify-between text-white md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              <span className="text-[18px] text-white ml-6">
                 <Link
                     to={`${link.link}`}
                     className="hover:text-primary  text-right"
                 >
                                  {link.name}
                                </Link>

              </span>
            </h1>
            <div className="duration-1000 delay-150 transition-all ease-in-out opacity-0 group-hover:opacity-100 bg-gray-300">
              {link.submenu && (
                <div className="bg-gray-300">
                  <div className="hidden bg-black hover:duration-700 hover:delay-700 hover:transition  absolute left-0 group-hover:md:block hover:md:block w-full">
                    <div className=" p-5 grid grid-cols-2 divide-x gap-12 text-white ">
                     
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
            z-50
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks,index) => (
              <div className="" key={index}>
                <div>
                  <div
                    className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"
                      }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14 text-white">
                        <Link to={`${slink.link}`}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
