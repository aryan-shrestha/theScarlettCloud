import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="text-white bg-black sticky top-0 flex items-center justify-between px-8 h-16">
      <h1 className="h-7 bg-white">LOGO</h1>
      <div className="flex items-center justify-center gap-8" id="nav-part2">
        <h4 className="uppercase font-medium border-b-2 ">
          <Link>Home</Link>
        </h4>
        <h4 className="uppercase font-medium">
          <Link>Shop</Link>
        </h4>
        <h4 className="uppercase font-medium">
          <Link>Contact</Link>
        </h4>
        <h4 className="uppercase font-medium">
          <Link>Blogs</Link>
        </h4>
      </div>
      <div id="nav-part3">
        <div className="h-5 w-5 rounded-full bg-white" id="circle"></div>
      </div>
    </nav>
  );
};

export default Navbar;
