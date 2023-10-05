import React from "react";

const Footer = () => {
  return (
    <div
      className="lg:w-full lg:h-[428px] w-[390px] h-[504px] bg-gradient-to-r from-[#345FC5] via-[#283B68] to-[#101625] lg:mt-0 mt-[52px]"
      style={{
        backgroundImage:
          "linear-gradient(86.43deg, #345FC5 -12.84%, #283B68 37.49%, #28468B 86.49%, #101625 113.17%)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-6 py-16">
        <div>
          <div className="lg:flex justify-center">
            <img src="/logo.png" alt="logo" className="w-36 h-32 " />
          </div>
        </div>
        <div className="ml-[41px]">
          <h4 className="text-white font-bold mb-4">Links</h4>
          <ul className="leading-8 text-[#fff] font-normal text-sm font-Lato">
            <li>Home</li>
            <li>Admissions</li>
            <li>Digital Classrooms</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Contact Us</h4>
          <ul className="leading-8 text-[#fff] font-normal text-sm font-Lato">
            <li>Phase 1, 141 6-105/1, 141,</li>
            <li>Quthbullapur Main Rd,</li>
            <li>Hyderabad,</li>
            <li>Telangana 500067</li>
            <li>Phone:04027862624</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Follow Us</h4>
          <ul className="leading-8 text-[#fff] font-normal text-sm font-Lato">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold">Privacy Policy</h4>
          <ul className="leading-8 text-[#fff] font-normal text-sm font-Lato">
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
