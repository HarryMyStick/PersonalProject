import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={32}
            height={32}
            className="mr-4"
          />
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="flex items-center">
          <a href="#" className="text-white mx-2">
            <FaTwitter />
          </a>
          <a href="#" className="text-white mx-2">
            <FaFacebook />
          </a>
          <a href="#" className="text-white mx-2">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
