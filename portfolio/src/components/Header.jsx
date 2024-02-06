import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div
        className=" w-full p-3 px-9 item-center
       flex justify-between m-auto"
      >
        <div
          className="flex w-9/12 
        h-14 max-h-14 relative
        list-none justify-evenly 
        items-center mx-6  rounded-xl 
        p-2 bg-white/10  text-white 
        hover:outline hover:outline-1
         hover:bg-slate-900/50 ml-24"
        >
          <NavLink
            to="/"
            className={({ isActive }) => `
            hover:animate-bounce ${
              isActive
                ? "animate-bounce rounded-xl bg-sky-900 text-sky-500"
                : " animate-none"
            }
          `}
          >
            <button
              className="
              w-20 h-[50px]
              hover:bg-sky-900
              hover:text-sky-500
              p-1 px-2 rounded-xl"
            >
              Home
            </button>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => `
              hover:animate-bounce ${
                isActive
                  ? " animate-bounce rounded-xl bg-sky-900 text-sky-500"
                  : "animate-none"
              }
          `}
          >
            <button
              className="
              w-20 h-[50px]
              hover:bg-sky-900
              hover:text-sky-500
              p-1 px-2 rounded-xl
             "
            >
              About
            </button>
          </NavLink>
          <NavLink
            to="/skill"
            className={({ isActive }) => `
            hover:animate-bounce
          ${isActive ? "animate-bounce bg-sky-900 text-sky-500 rounded-xl" : ""}
          `}
          >
            {" "}
            <button
              className="
              w-20 h-[50px]
              hover:bg-sky-900
              hover:text-sky-500
              p-1 px-2 rounded-xl
             "
            >
              Skills
            </button>
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) => `
           hover:animate-bounce
          ${
            isActive ? " animate-bounce bg-sky-900 text-sky-500 rounded-xl" : ""
          }
          `}
          >
            {" "}
            <button
              className="
              w-20 h-[50px]
              hover:bg-sky-900
              hover:text-sky-500
              p-1 px-2 rounded-xl
             "
            >
              Projects
            </button>
          </NavLink>
        </div>
        <div
          className=" mx-10 p-1 px-4 bg-white/10 
         text-white rounded-xl hover:outline 
         hover:outline-2 hover:bg-slate-900"
        >
          <button
            className="
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
