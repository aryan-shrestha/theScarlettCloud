import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../assets";

const Footer = () => {
  return (
    <footer className="bg-black text-white/80">
      <div className="container mx-auto p-4 flex flex-col space-y-8 lg:flex-row lg:items-start lg:justify-between lg:space-y-0">
        <div className="space-y-2">
          <h1 className="text-white text-xl">The Scarlett Cloud</h1>
          <p className="text-sm leading-6 max-w-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            ab numquam est asperiores qui fugiat, necessitatibus autem rerum,
            eligendi, assumenda expedita. Ipsa, nulla ullam.
          </p>
        </div>
        <div>
          <ul className="space-y-2 text-sm">
            <li className="font-medium text-white">Quick links</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2  text-sm">
            <li className="font-medium text-white">Follow us</li>
            <li>
              <a
                href="https://www.facebook.com/the.scarlet.cloud"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li>
              <a>Twitter</a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thescarletcloud_"
                target="_blank"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div>
          <img src={images.logo} alt="" className="hidden lg:block max-h-40" />
        </div>
      </div>
      <div>
        <p className="text-sm text-center">
          copyright © 2023, The scarlett Cloud. All right reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
