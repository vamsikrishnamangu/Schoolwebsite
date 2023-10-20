import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
const Navbar = () => {
  return (
    <>
      <div className="bg-[#1A2338] h-[100vh]">
        <div className="flex flex-row">
          <div>
            <img
              src="/schoolLogo.png"
              alt="images"
              className="ml-[24px] mt-[31px]"
            />
          </div>
          <div className="font-Roboto font-bold text-lg mt-[31px] text-[#fff] ml-[12px] ">
            <h1>ST. Michael’s School </h1>
          </div>
        </div>
        <ul className="flex flex-col">
          <li className="flex flex-row items-center mt-[50px]">
            <Link to="/Home" className="flex items-center">
              <AiOutlineHome className="w-[30px] h-[30px] text-[#fff] ml-[24px]" />
              <h1
                className="ml-[13px] text-[#85A3B8] text-lg  font-medium"
                style={{ lineHeight: "15px" }}
              >
                Home Page
              </h1>
            </Link>
          </li>
          <li className="flex flex-row items-center mt-[50px]">
            <Link to="/About" className="flex items-center">
              <AiOutlineHome className="w-[30px] h-[30px] text-[#fff] ml-[24px]" />
              <h1 className="ml-[13px] text-[#85A3B8] text-lg  font-medium">
                About Us
              </h1>
            </Link>
          </li>
          <li className="flex flex-row items-center mt-[50px]">
            <Link to="/Admission" className="flex items-center">
              <AiOutlineHome className="w-[30px] h-[30px] text-[#fff] ml-[24px]" />
              <h1
                className="ml-[13px] text-[#85A3B8] text-lg mr-[69px] font-medium"
                style={{ lineHeight: "15px" }}
              >
                Admissions
              </h1>
            </Link>
          </li>
          <li className="flex flex-row items-center mt-[50px]">
            <Link to="/Campusbuzz" className="flex items-center">
              <AiOutlineHome className="w-[30px] h-[30px] text-[#fff] ml-[24px]" />
              <h1
                className="ml-[13px] text-[#85A3B8] text-lg  font-medium"
                style={{ lineHeight: "15px" }}
              >
                Our Activities
              </h1>
            </Link>
          </li>
          <li className="flex flex-row items-center mt-[50px]">
            <Link to="/ContactUsPage" className="flex items-center">
              <AiOutlineHome className="w-[30px] h-[30px] text-[#fff] ml-[24px]" />
              <h1
                className="ml-[13px] text-[#85A3B8] text-lg  font-medium"
                style={{ lineHeight: "15px" }}
              >
                Contact Us
              </h1>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
