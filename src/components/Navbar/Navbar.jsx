import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "../../axios/axios";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [categoryMenu, setCategoryMenu] = useState(false);
  const [categories, setCategories] = useState([]);

  const { hash, pathname, search } = useLocation();
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const toggleCategoryMenu = () => {
    setCategoryMenu(!categoryMenu);
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get("/category/");
      setCategories(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (pathname === "/") {
      setBackgroundColor("bg-black");
      setTextColor("text-white");
    } else {
      setBackgroundColor("bg-white");
      setTextColor("text-black");
    }
  }, [pathname]);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <nav
      className={`mx-auto sticky top-0 p-4 lg:p-0 lg:py-8 lg:px-52 h-[8vh] flex items-center justify-between ${backgroundColor} ${textColor} z-50`}
    >
      <button onClick={toggleMenu} className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8192."
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <div>
        <h1 className="uppercase text-lg">Logo</h1>
      </div>
      <div
        className={`absolute md:relative w-full ${backgroundColor} ${textColor} md:w-auto h-screen md:h-auto top-0 right-0 p-8 md:p-0 transition-all duration-300 ${
          menu
            ? "opacity-100 z-50 pointer-events-all"
            : "opacity-0 -z-10 pointer-events-none md:opacity-100 md:z-50 md:pointer-events-auto"
        }`}
      >
        <button
          className="absolute top-10 right-10 md:hidden"
          onClick={toggleMenu}
        >
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
        <ul className="flex flex-col pt-10 gap-8 md:flex-row md:pt-0 ">
          <li className="hover:border-b-2 border-b-black">
            <Link
              to={"/"}
              className="text-lg md:text-base uppercase"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li className="border-b-2 border-b-black">
            <Link
              to={"/shop-new"}
              className="text-lg md:text-base uppercase"
              onClick={toggleMenu}
            >
              Shop
            </Link>
          </li>
          <li className="hover:border-b-2 border-b-black">
            <Link
              to={"#"}
              className="text-lg md:text-base uppercase"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
          <li className="hover:border-b-2 border-b-black">
            <Link
              to={"#"}
              className="text-lg md:text-base uppercase"
              onClick={toggleMenu}
            >
              Blogs
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-4 relative">
        {pathname === "/" || (
          <button onClick={toggleCategoryMenu} className="md:hidden">
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_51_120)">
                <path
                  d="M11.3334 6.66667H12.6667C14 6.66667 14.6667 6 14.6667 4.66667V3.33334C14.6667 2 14 1.33334 12.6667 1.33334H11.3334C10 1.33334 9.33337 2 9.33337 3.33334V4.66667C9.33337 6 10 6.66667 11.3334 6.66667ZM3.33337 14.6667H4.66671C6.00004 14.6667 6.66671 14 6.66671 12.6667V11.3333C6.66671 10 6.00004 9.33334 4.66671 9.33334H3.33337C2.00004 9.33334 1.33337 10 1.33337 11.3333V12.6667C1.33337 14 2.00004 14.6667 3.33337 14.6667Z"
                  stroke="black"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  opacity="0.34"
                  d="M4.00004 6.66667C4.70728 6.66667 5.38556 6.38572 5.88566 5.88562C6.38576 5.38552 6.66671 4.70725 6.66671 4C6.66671 3.29276 6.38576 2.61448 5.88566 2.11438C5.38556 1.61429 4.70728 1.33334 4.00004 1.33334C3.2928 1.33334 2.61452 1.61429 2.11442 2.11438C1.61433 2.61448 1.33337 3.29276 1.33337 4C1.33337 4.70725 1.61433 5.38552 2.11442 5.88562C2.61452 6.38572 3.2928 6.66667 4.00004 6.66667ZM12 14.6667C12.7073 14.6667 13.3856 14.3857 13.8857 13.8856C14.3858 13.3855 14.6667 12.7072 14.6667 12C14.6667 11.2928 14.3858 10.6145 13.8857 10.1144C13.3856 9.61429 12.7073 9.33334 12 9.33334C11.2928 9.33334 10.6145 9.61429 10.1144 10.1144C9.61432 10.6145 9.33337 11.2928 9.33337 12C9.33337 12.7072 9.61432 13.3855 10.1144 13.8856C10.6145 14.3857 11.2928 14.6667 12 14.6667Z"
                  stroke="black"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_51_120">
                  <rect width="16" height="16" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </button>
        )}

        <button>
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
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </button>
      </div>

      <div
        className={`absolute bg-white text-black  top-0 left-0 w-full h-screen transition-all duration-300 ${
          categoryMenu
            ? "opactity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"
        }
        md:w-full md:h-auto md:top-[10vh]`}
      >
        <button
          className="absolute top-5 right-10 md:hidden"
          onClick={toggleCategoryMenu}
        >
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
        {pathname === "/" || (
          <ul className="p-8 space-y-8 md:flex md:justify-center md:gap-8 md:space-y-0 md:p-0 ">
            <li className="text-lg lg:text-base uppercase md:hidden">
              Categories
            </li>
            {categories.map((category) => {
              return (
                <li className="text-sm lg:text-base" key={category.id}>
                  <Link>{category.name}</Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
