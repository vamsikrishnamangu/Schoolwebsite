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
      <div className=" hidden lg:inline-flex  flex-row space-x-10 2xl:space-x-40  lg:grid-cols-5 gap-8 px-6 py-16">
        <div>
          <div className="lg:flex justify-center ml-[84px] mt-[96px]">
            <img src="/logo.svg" alt="logo" className="w-[150px] h-[127px] " />
          </div>
        </div>
        <div className="ml-[169px] mt-[111px]">
          <h4 className="text-white font-normal ">Links</h4>
          <ul className="leading-8 text-[#fff]  mt-[25px] font-normal text-sm font-Lato">
            <li>Home</li>
            <li>Admissions</li>
            <li>Digital Classrooms</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="ml-[ 68px] mt-[111px]">
          <h4 className="text-white font-normal mb-4">Contact Us</h4>
          <ul className="leading-8 text-[#fff] font-normal text-sm font-Lato">
            <li>Phase 1, 141 6-105/1, 141,</li>
            <li>Quthbullapur Main Rd,</li>
            <li>Hyderabad,</li>
            <li>Telangana 500067</li>
            <li>Phone:04027862624</li>
          </ul>
        </div>
        <div className="ml-[ 68px] mt-[111px]">
          <h4 className="text-white font-normal ">Follow Us</h4>
          <ul className="leading-8 text-[#fff] font-normal text-sm font-Lato">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>
        <div className="ml-[103px] mt-[111px]">
          <h4 className="text-white font-normal">Privacy Policy</h4>
          <ul className="leading-8 text-[#fff] font-normal text-sm font-Lato">
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>

      <div className="lg:hidden grid-cols-2 gap-8 px-6 py-16">
        <div>
          <div className="flex flex-row">
            <div className="w-[156px]  space-x-36 h-[131px] mt-[53px] ml-[20px] ">
              <img src="/logo.svg" alt="logo" />
            </div>
            <div>
              <h4 className="text-white font-normal text-sm">Contact Us</h4>
              <ul className="leading-8 text-[#fff] font-normal text-sm font-Lato">
                <li>Phase 1, 141 6-105/1, 141,</li>
                <li>Quthbullapur Main Rd,</li>
                <li>Hyderabad,</li>
                <li>Telangana 500067</li>
                <li>Phone:04027862624</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-[44px]">
          <div className="ml-[41px]">
            <h4 className="text-white font-normal ">Links</h4>
            <ul className="leading-8 text-[#fff] font-normal text-sm font-Lato">
              <li>Home</li>
              <li>Admissions</li>
              <li>Digital Classrooms</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="ml-[45px]">
            <h4 className="text-white font-normal ">Follow Us</h4>
            <ul className="leading-8 text-[#fff] font-normal text-sm font-Lato">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-row">
          <h4 className="text-white font-normal text-sm mt-[35px] ml-[41px]">
            Privacy Policy
          </h4>
          <ul className=" ml-[45px] mt-[35px] text-[#fff] font-normal text-sm font-Lato">
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
