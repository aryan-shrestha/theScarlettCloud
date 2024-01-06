import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { images } from "../../assets";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(true);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <nav className="container bg-white text-lg text-neutral-800 sticky top-0 px-4 mx-auto md:flex md:items-center md:justify-between z-50">
      <div className="flex justify-between items-center">
        <span>
          <img src={images.logo} alt="" className="max-h-16" />
        </span>

        <span
          className="cursor-pointer md:hidden block"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          {menu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-neutral-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </span>
      </div>
      <ul
        className={`navbar md:space-x-8 flex items-center flex-col md:flex-row 
                md:z-auto md:static absolute w-full bg-white
                left-0 md:w-auto md:opacity-100  ${
                  menu ? "" : "opacity-0 top-[-400px]"
                } transition-all ease-in duration-200`}
      >
        <li className="my-4 md:my-0">
          <Link to="/" name="Home" closeMenu={closeMenu} />
        </li>
        <li className="my-4 md:my-0">
          <Link to="/shop" name="Shop" closeMenu={closeMenu} />
        </li>
        <li className="my-4 md:my-0">
          <Link to="blog" name="Blog" closeMenu={closeMenu} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

const Link = ({ to, name, closeMenu }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-primary border-neutral-800 "
          : "duration-300 hover:text-primary"
      }
      onClick={closeMenu}
    >
      {name}
    </NavLink>
  );
};
