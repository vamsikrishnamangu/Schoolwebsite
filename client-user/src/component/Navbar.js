import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiChevronLeft, HiChevronRight, HiX } from "react-icons/hi";
const texts = [
  "Admission open for AY 24-25 Click here.",
  "Are you a passionate educator? We are hiring. Apply now. Click here.",
  "Latest Newsletter released click here.",
];
const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-[#1A2338]">
      <div className="lg:flex-row items-center lg:justify-between">
        <div className="flex flex-row justify-between items-center ">
          {/* Logo */}
          <div>
            <img
              src="/logo.svg"
              alt="logo"
              className="w-[48px] h-[40px] lg:w-[12rem] lg:h-[8rem] "
            />
          </div>

          {/* Social Icons */}
          <div className="flex flex-row gap-[13px]">
            <a href="https://www.facebook.com/openai/">
              <img src="/facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/openai/">
              <img src="/instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/openai/">
              <img src="/video.png" alt="Video" />
            </a>
            <a href="https://www.linkedin.com/openai/">
              <img src="/linkedin.png" alt="Video" />
            </a>
          </div>
          <div className="flex items-center ml-[50px] lg:bg-[#1A2338] p-4 lg:mt-0 mt-4 w-[390px] h-[21px] text-white">
            <HiChevronLeft size={24} />
            <div className="mx-4 text-xl font-normal overflow-hidden whitespace-nowrap">
              {texts.map((text, index) => (
                <p
                  key={index}
                  className={`${
                    index === currentTextIndex ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-500`}
                >
                  {text}
                </p>
              ))}
            </div>
            <HiChevronRight size={24} />
          </div>
          <div className="h-20 w-px bg-white" />
          <div className="space-x-9">
            <p className="text-white font-semibold ">Pay Fee</p>
          </div>
          {/* Nav Toggle */}
          <div className="relative">
            <FaBars
              className="cursor-pointer text-[#fff]"
              size={28}
              onClick={() => setShowPopup(true)}
            />
          </div>
        </div>

        <div className="relative">
          {/* Nav Toggle */}
          {/* <FaBars
              className=" mr-[26px] cursor-pointer text-[#fff]  space-x-20"
              size={28}
              onClick={() => setShowPopup(true)}
            /> */}

          {showPopup && (
            <div className="fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-[rgba(32,38,34,0.9)] backdrop-blur-md z-10">
              <div className="bg-[#1A2338] bg-opacity-70  rounded-lg p-4 relative w-full sm:w-[390px] lg:w-[1280px] xl:w-[1280px] 2xl:w-[1440px] h-[1520px] lg:h-[800px] font-bold text-xl">
                {/* Close Button */}
                <HiX
                  className="cursor-pointer text-[#fff] absolute sm:top-2 sm:right-2 top-[10px] right-[10px] z-50 lg:mr-[10rem] lg:mt-[5rem]"
                  size={24}
                  onClick={() => setShowPopup(false)}
                />

                <img
                  src="/logo.svg"
                  alt="logo"
                  className="lg:mt-[40px] mt-[50px]"
                />

                {/* Navigation Items */}
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-[140px] lg:space-y-0">
                  <div>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-[#6E99FF] lg:mt-[50px]"
                    >
                      Home page
                    </Link>
                    <Link
                      to="/about"
                      className="block px-4 py-2 text-[#6E99FF]"
                    >
                      Governance & Leadership
                    </Link>
                    <Link
                      to="/activities"
                      className="block px-4 py-2 text-[#6E99FF]"
                    >
                      Life at St. Michael’s
                    </Link>
                    <Link
                      to="/admissions"
                      className="block px-4 py-2 text-[#6E99FF]"
                    >
                      Admissions
                    </Link>
                    <Link
                      to="/Contact"
                      className="block px-4 py-2 text-[#6E99FF]"
                    >
                      Contact Us
                    </Link>
                  </div>

                  <div className="flex flex-col  ">
                    <Link to="/admissions" className="text-[#6E99FF] ml-[4px]">
                      Campus Buzz
                    </Link>
                    <p className="text-[#fff] font-medium text-base mt-[11px] flex flex-row ">
                      <img src="/Events.png" alt="logo" className="mr-4" />
                      Latest Event
                    </p>
                    <p className="text-[#fff] font-medium text-base mt-[25px] flex flex-row">
                      <img src="/calendar.png" alt="logo" className="mr-4" />
                      Calendar
                    </p>
                    <p className="text-[#fff] font-medium text-base mt-[23px] flex flex-row">
                      <img src="/newsletter.png" alt="logo" className="mr-4" />
                      Newsletter Library
                    </p>
                    <p className="text-[#fff] font-medium text-base mt-[25px] flex flex-row">
                      <img src="/governance.png" alt="logo" className="mr-4" />
                      Governance &Leadership
                    </p>

                    <Link
                      to="/admissions"
                      className="text-[#6E99FF] mt-[31px] ml-[4px]"
                    >
                      Future Ready Infra
                    </Link>
                    <p className="text-[#fff] font-medium text-base mt-[23px] flex flex-row">
                      <img src="/classroom.png" alt="logo" className="mr-4" />
                      Digital Classrooms
                    </p>
                    <p className="text-[#fff] font-medium text-base mt-[23px]  flex flex-row">
                      <img src="/workspace.png" alt="logo" className="mr-4" />
                      Google workspace
                    </p>
                    <p className="text-[#fff] font-medium text-base mt-[23px] flex flex-row">
                      <img src="/activity.png" alt="logo" className="mr-4" />
                      Outdoor activities
                    </p>
                  </div>
                  <div>
                    <Link to="/" className="block px-4 py-2 text-[#6E99FF]">
                      Admissions
                    </Link>
                    <p className="text-[#fff] font-medium text-base mt-[10px] flex flex-row">
                      <img src="/process.png" alt="logo" className="mr-4" />
                      Eligibility and Procedure
                    </p>
                    <p className="text-[#fff] font-medium text-base mt-[20px] flex flex-row">
                      <img
                        src="/feeStructure.png"
                        alt="logo"
                        className="mr-4"
                      />
                      Fee Structure
                    </p>
                    <p className="text-[#fff] font-medium text-base mt-[20px] flex flex-row">
                      <img
                        src="/applicationForm.png"
                        alt="logo"
                        className="mr-4"
                      />
                      Application Form Book a Meet
                    </p>
                    <p className="text-[#fff] font-medium text-base mt-[20px] flex flex-row">
                      <img src="/campusVisit.png" alt="logo" className="mr-4" />
                      Book a Campus Visit
                    </p>
                  </div>
                  <div>
                    <Link to="/" className="block px-4 py-2 text-[#6E99FF]">
                      Our school
                    </Link>
                    {/* Wrap images in flex container */}
                    <div className="flex lg:flex-col ml-[2px] gap-[4px] mt-4">
                      <img
                        src="/image 25.png"
                        alt="logo"
                        className="lg:w-[237px] lg:h-[150px] w-[140px] h-[88px] "
                      />
                      <img
                        src="/image 26.png"
                        alt="logo"
                        className="lg:w-[237px] lg:h-[150px] w-[139px] h-[87px] "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
