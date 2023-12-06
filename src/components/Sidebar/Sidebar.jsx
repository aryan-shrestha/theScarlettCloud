import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ sidebar, categories, toggleSidebar }) => {
  return (
    <div
      className={`container mx-auto py-4 md:py-0 space-y-4 bg-white text-neutral-800 fixed top-10 md:sticky md:top-32  ${
        sidebar ? "-translate-y-[0]" : "-translate-y-[120%] md:-translate-y-[0]"
      } w-full h-full transition-all duration-300 md:h-fit`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 absolute top-0 right-8 cursor-pointer md:hidden"
        onClick={toggleSidebar}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>

      <ul className="space-y-2">
        <li className="font-medium">Categories</li>
        {categories.map((category) => {
          return (
            <SidebarNavLink
              name={category.name}
              to={category.slug}
              key={category.id}
            />
          );
        })}
      </ul>
      <form>
        <ul className="space-y-2">
          <li className="font-medium">Sort by</li>
          <li className="space-x-2">
            <input type="radio" name="ordering" id="a-z" value={"name"} />
            <label htmlFor="a-z">A-Z</label>
          </li>
          <li className="space-x-2">
            <input type="radio" name="ordering" id="z-a" value={"-name"} />
            <label htmlFor="z-a">Z-A</label>
          </li>
          <li className="space-x-2">
            <input
              type="radio"
              name="ordering"
              id="og-price"
              value={"og-price"}
            />
            <label htmlFor="og-price">High to Low</label>
          </li>
          <li className="space-x-2">
            <input
              type="radio"
              name="ordering"
              id="-og-price"
              value={"-og-price"}
            />
            <label htmlFor="-og-price">High to Low</label>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Sidebar;

const SidebarNavLink = ({ name, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "block  text-primary"
          : "block  rounded-md  hover:text-primary"
      }
    >
      {name}
    </NavLink>
  );
};
