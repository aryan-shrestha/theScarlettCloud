import React from "react";
import { Link } from "react-router-dom";

const Card = ({ activeCard, id, setActiveCard, imageSrc }) => {
  return (
    <div
      className={`flex flex-grow  ${
        activeCard == id ? "bg-neutral-900 text-white" : "w-32"
      } cursor-pointer rounded-tl-3xl rounded-br-[4rem] overflow-hidden`}
      onClick={setActiveCard}
    >
      <div
        className={`${
          activeCard != id && "hidden"
        } flex flex-col justify-between py-6  p-6 w-[55%]`}
      >
        <div className="">
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
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </div>

        <h1 className="font-playfairDisplay text-4xl font-medium relative md:leading-[160%]">
          Discover the Perfect Christmas{" "}
          <span className="px-4 pb-2 rounded-tr-3xl rounded-bl-3xl inline-flex bg-secondary text-neutral-800 text-xl md:text-4xl">
            Present
          </span>{" "}
        </h1>
        <p className="line-clamp-3 md:leading-7">
          Explore our curated collection of festive delights that cater to every
          age, interest, and style. From cozy winter essentials to cutting-edge
          gadgets, we have something for everyone on your list. With a wide
          range of options, you're sure to find a gift that resonates with the
          unique personality of each recipient.
        </p>
        <Link className="bg-white text-neutral-800 w-fit px-4 py-2 rounded-3xl flex items-center">
          Shop
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 inline ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </Link>
      </div>
      <div className="h-full w-full">
        <img
          src={imageSrc}
          alt="placeholder"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Card;
