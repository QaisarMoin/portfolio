import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="flex justify-center items-center mt-8">
        <div
          className="text-white border-y-2
       border-white-700  list-none flex justify-evenly
         w-3/4 h-24 items-center pb-4
       "
        >
          <li
            className=" h-14 w-14  hover:shadow-2xl
            hover:shadow-white bg-transparent"
          >
            <Link to="https://github.com/QaisarMoin">
              <img src="public/images/git.png" />
              <p>GitHub</p>
            </Link>
          </li>
          <li
            className=" h-14 w-14  hover:shadow-2xl
            hover:shadow-white bg-transparent"
          >
            <Link to="https://www.instagram.com/qaisarmeerashrafi/">
              <img src="public/images/insta.png" />
              <p>Instagram</p>
            </Link>
          </li>
          <li
            className=" h-14 w-14 hover:shadow-2xl
            hover:shadow-white bg-transparent"
          >
            <Link to="https://www.linkedin.com/in/qaisar-moin-884918253/">
              <img src="public/images/linkedin.png" />
              <p>linkedin</p>
            </Link>
          </li>
        </div>
      </div>
    </>
  );
}

export default Footer;
