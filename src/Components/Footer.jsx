import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mx-80 p-4 px-12 text-center flex justify-between items-center max-sm:mx-0 max-sm:px-4 max-sm:text-start max-sm:text-xs max-lg:mx-16">
      <h2 className="text-gray-500">© 2024 Jag Jeevan Ricky. All rights reserved.</h2>
      <div className="flex gap-4 justify-center items-center">
        <a href="https://www.instagram.com/5_g.one_5/"  target="_blank" rel="noopener noreferrer"><FaInstagram className="size-5" /></a>
        <a href="https://www.linkedin.com/in/jag-jeevan-ricky-8099ab246/"  target="_blank" rel="noopener noreferrer"><FaLinkedin className="size-5"  /></a>
        <a href="https://github.com/GOne0816"  target="_blank" rel="noopener noreferrer"><FaGithub className="size-5"  /></a>
      </div>
    </div>
  );
};

export default Footer;
