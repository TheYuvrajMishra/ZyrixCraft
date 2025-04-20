import React from "react";
import { FaHome, FaThLarge, FaUsers, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed z-10 bottom-5 w-full flex justify-center">
      <div className="flex items-center bg-opacity-80 bg-[#FEF5FF] rounded-full shadow-lg">
        <div className="mx-5 mr-2 text-black text-lg">ZyrixCraft</div>
        <div className="flex items-center bg-opacity-80 bg-[#f5e3f7] border border-black/50 rounded-full p-2 shadow-lg">
            <div className="mx-3 text-black text-2xl hover:text-yellow-500 transition duration-300">
                <a href="/" aria-label="Home">
                    <FaHome />
                </a>
            </div>
            <div className="mx-3 text-black text-2xl hover:text-yellow-500 transition duration-300">
                <a href="/features" aria-label="Features">
                    <FaThLarge />
                </a>
            </div>
            <div className="mx-3 text-black text-2xl hover:text-yellow-500 transition duration-300">
                <a href="/team" aria-label="Team">
                    <FaUsers />
                </a>
            </div>
            <div className="mx-3 text-blac text-2xl hover:text-yellow-500 transition duration-300">
                <a href="/profile" aria-label="Profile">
                    <FaUserCircle />
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
