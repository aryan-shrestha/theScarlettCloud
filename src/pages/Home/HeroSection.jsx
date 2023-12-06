import React from "react";
import { Carousel } from "@material-tailwind/react";

const HeroSection = () => {
  const images = [
    "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/414706/pexels-photo-414706.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3171770/pexels-photo-3171770.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  return (
    <div className="h-[90vh] flex flex-col justify-center items-center">
      <div className="text-6xl md:text-8xl xl:text-9xl font-medium leading-[130%]">
        <h1 className="font-playfairDisplay relative">
          Lorem ipsum dolor sit amet{" "}
          <span className="px-4 pb-2 rounded-tr-3xl rounded-bl-3xl inline-flex bg-secondary text-5xl md:text-7xl">
            consect
          </span>{" "}
          dol
          <span className="backdrop-blur-sm bg-white/50 font-poppins md:text-center md:absolute md:bottom-0 md:-mb-28 lg:-mb-16 md:p-2 md:right-0 md:max-w-xs md:border-[1px] md:border-neutral-600 md:rounded-tl-3xl md:rounded-br-3xl">
            <p className="text-base font-normal leading-6 bg-slate-500 py-8 md:py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis fugit eius doloribus doloremque hic! Eius!
            </p>
          </span>
        </h1>
      </div>

      <div className="md:hidden">
        <Carousel>
          {images.map((src, index) => {
            return (
              <img
                className="h-64 w-full object-cover"
                src={src}
                alt="placeholder"
                key={index + 1}
              />
            );
          })}
        </Carousel>
      </div>

      <div className="hidden md:flex space-x-4 mt-32">
        {images.map((src, index) => {
          return (
            <div className="" key={index}>
              <img
                src={src}
                alt="placeholder"
                className={`h-64 w-full object-cover ${
                  index % 2 == 0 ? "" : "mt-8"
                } rounded-3xl`}
              ></img>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection;
