import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img src="/images/Rc logo.png" alt="" className="mx-2 w-16"/> */}
        <div className="mx-2 w-16 text-2xl font-inter font-bold">RC</div>
      </div>

      <div className="m-8 flex items-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/rupak-choppala-689659253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/rupakchoppala" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/rockie_rupak/?next=%2F&hl=en" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        {/* <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a> */}
      </div>
    </nav>
  );
}

export default Navbar;