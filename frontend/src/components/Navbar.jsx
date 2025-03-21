import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = ({data}) => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img src="/images/Rc logo.png" alt="" className="mx-2 w-16"/> */}
        <div className="mx-2 w-16 text-2xl font-inter font-bold">
        <span>{data?.firstName?.slice(0, 1).toUpperCase()}</span>
<span>{data?.lastName?.slice(0, 1).toUpperCase()}</span>

        </div>
      </div>

      <div className="m-8 flex items-center gap-4 text-2xl">
        <a href={data?.contact?.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href={data?.contact?.git} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href={data?.contact?.insta} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href={data?.contact?.x} target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;