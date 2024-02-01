import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ReactLenis } from "@studio-freight/react-lenis";

import { images, videos } from "../../assets";

const Home = () => {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.ref(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page1 h1",
        start: "top 10%",
        end: "top -25%",
        toggleActions: "play play reverse reverse",
        scrub: 1,
      },
    });

    tl.to(
      ".page1 h1",
      {
        x: -150,
      },
      "anim"
    );

    tl.to(
      ".page1 h2",
      {
        x: 150,
      },
      "anim"
    );

    tl.to(
      ".page1 video",
      {
        width: "95%",
      },
      "anim"
    );

    const tl2 = gsap.timeline(
      {
        scrollTrigger: {
          trigger: ".page2 h1",
          markers: false,
          start: "top center",
          end: "top 5%",
          toggleActions: "play play reverse reverse",
          scrub: 2,
        },
      },
      "anim2"
    );

    tl2.to(
      ".main",
      {
        backgroundColor: "#fff",
      },
      "anim2"
    );

    tl2.from(".page2 h1", {
      y: -150,
      opacity: 0,
    });

    tl2.from(".page2-container", {
      y: 150,
      opacity: 0,
    });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page3 h1",
        markers: false,
        start: "top 50%",
        end: "top 0%",
        scrub: 1,
      },
    });

    tl3.to(
      ".main",
      {
        backgroundColor: "#000",
      },
      "anim3"
    );

    tl3.from(
      ".page3 h1",
      {
        y: -130,
        opacity: 0,
      },
      "anim3"
    );

    tl3.from(".page3 .image-container", {
      x: -130,
      y: 300,
      opacity: 0,
    });

    tl3.from(".page3 .video-container", {
      x: 130,
      y: 300,
      opacity: 0,
    });

    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page4 h1",
        markers: false,
        start: "top center",
        end: "top 10%",
        scrub: 3,
      },
    });

    tl4.to(
      ".main",
      {
        backgroundColor: "#fff",
      },
      "anim2"
    );

    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page5 h1",
        markers: false,
        start: "top center",
        end: "top 10%",
        scrub: 3,
      },
    });

    tl5.to(
      ".main",
      {
        backgroundColor: "#000",
      },
      "anim2"
    );
  }, []);

  return (
    <ReactLenis root>
      <main className="main h-fit text-white bg-black">
        <section className="page1 relative min-h-[130vh] w-full pt-[16vw] md:pt-[8vw]">
          <h1 className="text-[9vw] text-center  font-light font-playfairDisplay uppercase">
            Turning Ideas
          </h1>
          <h2 className="text-[9vw] text-center  font-light font-playfairDisplay uppercase">
            Into Experience
          </h2>

          <video
            className="mx-auto w-[60%] h-[60vh]  md:h-[90vh] object-cover mt-12"
            src={videos.video_1}
            autoPlay
            muted
            loop
          ></video>
        </section>
        <section className="page2 relative min-h-[80vh] w-full py-24 px-[5vw] text-black border-b-[1px] border-b-white">
          <h1 className="text-[7vw] text-center md:text-left mb-[3vh] md:mb-[1.5vh]">
            We're The Scarlett Cloud,{" "}
          </h1>
          <div className="page2-container h-[60vh] gap-[3vh] md:gap-0 w-full flex flex-col md:flex-row items-center md:justify-between">
            <div className="page2-left w-[60%] text-center md:text-left md:w-[45%]">
              <h1 className="text-[4.5vw] uppercase md:text-[3.5vw] font-light leading-[2rem] md:leading-[4rem]">
                A Creative Collective Unleashing Your Celebration's Potential!
              </h1>
            </div>
            <div className="leading-7 page2-right w-[85%] text-center md:text-left md:w-[24%]">
              <p>
                Our passion is to transform your vision into an unforgettable
                experience. From conceptualization to execution, we craft
                extraordinary events that not only meet but exceed your
                expectations.
              </p>
              <button className="w-full rounded-2xl bg-secondary py-1 mt-5">
                ABOUT US
              </button>
            </div>
          </div>
        </section>
        <section className="page3 relative min-h-[100vh] py-24 px-[5vw] text-white border-b-[1px] border-b-black">
          <h1 className="uppercase text-[7vw]">
            <span className="text-secondary">selected</span> Works
          </h1>
          <div className="page3-part1 flex flex-col md:flex-row items-center gap-32">
            <div className="image-container">
              <img
                src={images.hero_image1}
                alt=""
                className="w-full md:w-[40vw] h-[600px] mt-40 object-cover rounded-md"
              />
              <p className="text-sm text-right mt-2 font-light">
                <span className="text-lg mr-4 font-normal">Project 1</span>{" "}
                Wedding
              </p>
            </div>
            <div className="video-container">
              <video
                src={videos.video_1}
                autoPlay
                muted
                loop
                className="w-full md:w-[40vw] h-[600px] object-cover rounded-md"
              ></video>
              <p className="text-sm text-right mt-2 font-light">
                <span className="text-lg mr-4 font-normal">Project 2</span>{" "}
                Wedding
              </p>
            </div>
          </div>
          <div className="page3-part1 flex flex-col md:flex-row items-center gap-32">
            <div className="image-container">
              <img
                src={images.hero_image2}
                alt=""
                className="w-full md:w-[40vw] h-[600px] mt-40 object-cover rounded-md"
              />
              <p className="text-sm text-right mt-2 font-light">
                <span className="text-lg mr-4 font-normal">Project 3</span>{" "}
                Brunch
              </p>
            </div>
            <div className="video-container">
              <video
                src={videos.video_2}
                autoPlay
                muted
                loop
                className="w-full md:w-[40vw] h-[600px] object-cover rounded-md"
              ></video>
              <p className="text-sm text-right mt-2 font-light">
                <span className="text-lg mr-4 font-normal">Project 4</span>{" "}
                Family Dinner
              </p>
            </div>
          </div>
        </section>
        <section className="page4  relative flex items-center justify-center flex-col min-h-[100vh] py-24 px-[5vw] text-black border-b-[1px] border-b-black">
          <h1 className="mb-8 md-80% md:w-[30%] text-center">
            We also offer a symphony of additional services to amplify your
            event experience.
          </h1>
          <div className="elem group flex items-center justify-center">
            <img
              src={images.photo_1}
              alt=""
              className="absolute z-10 rounded-lg bottom-[30%] left-[5%] h-[50vh] opacity-0 translate-y-[10%] rotate-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-[0] group-hover:rotate-0"
            />
            <div className="text-div h-[44px] md:h-[80px] xl:h-[156px] overflow-hidden">
              <h1 className="text-[7vw] uppercase transition-all duration-300 ease-out group-hover:-translate-y-[100%]">
                Celebrations
              </h1>
              <h1 className="text-[7vw] text-secondary uppercase transition-all duration-500 ease-out group-hover:-translate-y-[100%]">
                Celebrations
              </h1>
            </div>
            <img
              src={images.photo_2}
              alt=""
              className="absolute z-10 rounded-lg top-[30%] right-[5%] h-[50vh] opacity-0 -translate-y-[10%] rotate-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-[0] group-hover:rotate-0"
            />
          </div>
          <div className="elem group flex items-center justify-center">
            <img
              src={images.photo_3}
              alt=""
              className="absolute z-10 rounded-lg bottom-[30%] left-[5%] h-[50vh] opacity-0 translate-y-[10%] rotate-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-[0] group-hover:rotate-0"
            />
            <div className="text-div h-[44px] md:h-[80px] xl:h-[156px] overflow-hidden">
              <h1 className="text-[7vw] uppercase transition-all duration-300 ease-out group-hover:-translate-y-[100%]  ">
                bouquet
              </h1>
              <h1 className="text-[7vw] text-secondary uppercase transition-all duration-500 ease-out group-hover:-translate-y-[100%]">
                bouquet
              </h1>
            </div>
            <img
              src={images.photo_4}
              alt=""
              className="absolute z-10 rounded-lg top-[30%] right-[5%] h-[50vh] opacity-0 -translate-y-[10%] rotate-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-[0] group-hover:rotate-0"
            />
          </div>
          <div className="elem group flex items-center justify-center">
            <img
              src={images.photo_5}
              alt=""
              className="absolute z-10 rounded-lg bottom-[30%] left-[5%] h-[50vh] opacity-0 translate-y-[10%] rotate-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-[0] group-hover:rotate-0"
            />
            <div className="text-div h-[44px] md:h-[80px] xl:h-[156px] overflow-hidden">
              <h1 className="text-[7vw] uppercase transition-all duration-300 ease-out group-hover:-translate-y-[100%]  ">
                Suprises
              </h1>
              <h1 className="text-[7vw] text-secondary  uppercase transition-all duration-500 ease-out group-hover:-translate-y-[100%]">
                Suprises
              </h1>
            </div>
            <img
              src={images.photo_6}
              alt=""
              className="absolute z-10 rounded-lg top-[30%] right-[5%] h-[50vh] opacity-0 -translate-y-[10%] rotate-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-[0] group-hover:rotate-0"
            />
          </div>
        </section>
        <section className="page5 relative min-h-[100vh] py-24 px-[5vw] text-white border-b-[1px] border-b-black">
          <h1 className="text-[7vw] uppercase pb-8">
            <span className="text-secondary">Mentions</span> Clients
          </h1>
          <div className="box group relative flex justify-between p-8 border-t-[1px] border-white">
            <div className="project-image-container absolute top-0 left-[40%] rounded-lg bg-white h-[40vh] w-full md:w-[16vw] overflow-hidden transition-all duration-300 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-105 z-50">
              <img
                src={images.project_1}
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            <h3>Birthday Party</h3>
            <h3>2021</h3>
          </div>
          <div className="box group relative flex justify-between p-8 border-t-[1px] border-white">
            <div className="project-image-container absolute top-0 left-[40%] rounded-lg bg-white h-[40vh] w-full md:w-[16vw] overflow-hidden transition-all duration-300 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-105 z-50">
              <img
                src={images.project_2}
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            <h3>Business seminar</h3>
            <h3>2021</h3>
          </div>
          <div className="box group relative flex justify-between p-8 border-t-[1px] border-b-[1px]  border-white">
            <div className="project-image-container absolute top-0 left-[40%] rounded-lg bg-white h-[40vh] w-full md:w-[16vw] overflow-hidden transition-all duration-300 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-105 z-50">
              <img
                src={images.project_3}
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            <h3>Wedding</h3>
            <h3>2021</h3>
          </div>
        </section>
        {/* <footer className="h-[90vh] w-full bg-blue-gray-500">
          <h1>Footer</h1>
        </footer> */}
      </main>
    </ReactLenis>
  );
};

export default Home;
