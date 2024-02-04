import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className=" w-full p-3 item-center flex justify-between m-auto">
        <div
          className="flex w-9/12 
         h-14 max-h-14 relative
        list-none justify-around 
        items-center mx-6  rounded-xl 
        p-2 bg-white/10  text-white backdrop-blur-lg
         backdrop-filter drop-shadow-xl drop-shadow-white"
        >
          <li className=" mx-3">
            <button
              className="
              w-20 h-[50px]
             hover:animate-bounce
              hover:bg-sky-900
              hover:text-sky-500
              p-1 px-2 rounded-xl"
            >
              Home
            </button>
          </li>
          <li className=" mx-3">
            {" "}
            <button
              className="
              w-20 h-[50px]
               hover:animate-bounce
              hover:bg-sky-900
              hover:text-sky-500
              p-1 px-2 rounded-xl
             "
            >
              About
            </button>
          </li>
          <li className=" mx-3">
            {" "}
            <button
              className="
              w-20 h-[50px]
               hover:animate-bounce
              hover:bg-sky-900
              hover:text-sky-500
              p-1 px-2 rounded-xl
             "
            >
              Skills
            </button>
          </li>
          <li className=" mx-3">
            {" "}
            <button
              className="
              w-20 h-[50px]
               hover:animate-bounce
              hover:bg-sky-900
              hover:border-white
              hover:border-[1px]
              hover:text-sky-500
              p-1 px-2 rounded-xl
             "
            >
              Projects
            </button>
          </li>
        </div>
        <div className=" mx-6 p-2 text-white">
          <button
            className="
             mr-11
              w-20 h-[50px]
               hover:animate-bounce
              hover:bg-sky-900/50
              hover:border-2
              hover:border-orange-500
              hover:text-sky-500
              p-1 px-2 rounded-xl
             "
          >
            Contact
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
