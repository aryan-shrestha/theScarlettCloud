import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useFetch } from "../../hooks";

const Sidebar = ({ sidebar, closeSidebar, categories }) => {
  return (
    <div
      className={`fixed lg:sticky top-0 lg:top-20 w-full lg:w-[40%] lg:pr-4 h-screen lg:h-[85vh] overflow-y-scroll bg-white/50 backdrop-blur z-50 lg:z-auto ${
        sidebar ? "" : "-translate-x-[100%] lg:-translate-x-0 "
      } trasition-all duration-300`}
    >
      <div className="w-[80%] lg:w-auto bg-white p-4 lg:p-0">
        <ul className="space-y-4 ">
          <li className="text-lg mb-4 flex justify-between lg:hidden">
            Category{" "}
            <button onClick={closeSidebar} className="">
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
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
          <li className="">
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "block text-center py-4 w-full bg-secondary border-[1px] border-neutral-800 rounded-xl"
                  : "block text-center py-4 w-full text-neutral-800 hover:border-[1px] hover:border-neutral-800 rounded-xl"
              }
              end
            >
              All Product
            </NavLink>
          </li>

          {categories.map((category) => {
            return (
              <li key={category.id}>
                <NavLink
                  to={category.slug}
                  className={({ isActive }) =>
                    isActive
                      ? "block text-center py-4 w-full text-primary border-[1px] border-primary rounded-xl"
                      : "block text-center py-4 w-full text-neutral-800 border-[1px] border-white hover:border-neutral-800 rounded-xl"
                  }
                >
                  {category.name}
                </NavLink>
              </li>
            );
          })}
          {categories.map((category) => {
            return (
              <li key={category.id}>
                <NavLink
                  to={category.slug}
                  className={({ isActive }) =>
                    isActive
                      ? "block text-center py-4 w-full text-primary border-[1px] border-primary rounded-xl"
                      : "block text-center py-4 w-full text-neutral-800 border-[1px] border-white hover:border-neutral-800 rounded-xl"
                  }
                >
                  {category.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
