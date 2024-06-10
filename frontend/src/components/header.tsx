import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="flex-1 flex justify-center items-center">
          <div className="my-18 p-5 text-center md:text-left">
            <p className="text-gray-800 text-6xl font-bold">
              Empower Your Business with Cutting-Edge Technology
            </p>
            <p className="text-gray-500 text-lg mt-10">
              Cloud computing offers scalable, cost-effective IT solutions
              accessible over the internet. Enhance efficiency, security, and
              innovation with cloud-based services, driving business growth and
              agility in the digital era.
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/cloud.png"
            width={500}
            height={300}
            className="max-w-full md:max-w-none"
            alt="Cloud"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
