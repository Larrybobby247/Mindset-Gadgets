import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/logo.jpg'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="relative sticky top-0 left-0 flex justify-between items-center px-4 py-3 lg:px-8 lg:py-4 bg-white shadow-md z-5">
      <Link to="/" className="text-3xl font-bold">
        <img src={Logo} alt="" className="w-12"/>
      </Link>
      <div className="flex items-center gap-2 lg:gap-8">
        {/* Large Screen nav links */}
        <ul className="lg:flex gap-5 font-medium text-lg hidden">
            <li className="nav-link-sm" onClick={() => setNav(false)}>
          <Link to="/" className="" onClick={() => window.scrollTo(0, 0)}>
            Home
          </Link>
        </li>
        <li className="nav-link-sm" onClick={() => setNav(false)}>
          <a href="#store" className="" onClick={() => window.scrollTo(0, 0)}>
            Store
          </a>
        </li>
        <li className="nav-link-sm" onClick={() => setNav(false)}>
          <a href="#services" className="" onClick={() => window.scrollTo(0, 0)}>
            Services
          </a>
        </li>
        <li className="nav-link-sm" onClick={() => setNav(false)}>
          <a href="#contact-us" className="" onClick={() => window.scrollTo(0, 0)}>
            Contact Us
          </a>
        </li>
        </ul>
        <div
          className={`lg:hidden text-3xl cursor-pointer ${nav ? "hidden" : "block"}`}
          onClick={() => setNav(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>

        <div
          className={`text-3xl cursor-pointer ${nav ? "block" : "hidden"}`}
          onClick={() => setNav(false)}
        >
          <FontAwesomeIcon icon={faClose} />
        </div>
        <button className="btn-primary"><a href="https://wa.me/2348110947408">Order Now</a></button>
      </div>

      {/* small screen nav links */}
      <ul
        className={`absolute right-1 top-16 bg-black text-white flex flex-col gap-5 py-4 transition-translate duration-400 px-12 rounded-sm text-xl font-medium ${nav ? "right-1" : "right-[-100%]"}`}
      >
        <li className="nav-link-sm" onClick={() => setNav(false)}>
          <Link to="/" className="" onClick={() => window.scrollTo(0, 0)}>
            Home
          </Link>
        </li>
        <li className="nav-link-sm" onClick={() => setNav(false)}>
          <a href="#store" className="" onClick={() => window.scrollTo(0, 0)}>
            Store
          </a>
        </li>
        <li className="nav-link-sm" onClick={() => setNav(false)}>
          <a href="#services" className="" onClick={() => window.scrollTo(0, 0)}>
            Services
          </a>
        </li>
        <li className="nav-link-sm" onClick={() => setNav(false)}>
          <a href="#contact-us" className="" onClick={() => window.scrollTo(0, 0)}>
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
