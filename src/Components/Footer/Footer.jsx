import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-7 md:p-8 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-5xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          vishalchaurasia198@gmail.com
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          linkedin.com/in/vishal-chaurasia-06852b2a4
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          github.com/developer-vishal-web
        </li>
      </ul>
    </div>
  );
};

export default Footer;