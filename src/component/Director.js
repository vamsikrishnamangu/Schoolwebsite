import React, { useState } from "react";

const Director = () => {
  const [selectedTitle, setSelectedTitle] = useState(null);

  const handleTitleClick = (title) => {
    setSelectedTitle(selectedTitle === title ? null : title);
  };

  return (
    <>
      <div className=" mt-[20px] top-[2718px] left-[84px] w-full h-[112px] bg-[#2E416D] rounded-[3px] flex justify-between items-center px-6">
        {["Director", "Administrative", "Leadership"].map((title) => (
          <div
            className="flex flex-col items-center space-y-2 cursor-pointer"
            onClick={() => handleTitleClick(title)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <g clipPath="url(#clip0_0_254)">
                <path
                  d="M18 34.7144C14.2334 30.5676 9.12545 27.8816 3.57426 27.1287C2.94241 27.0588 2.35886 26.7573 1.93622 26.2824C1.51359 25.8075 1.28184 25.1929 1.28569 24.5573V3.85725C1.28567 3.48583 1.3661 3.11882 1.52147 2.78145C1.67683 2.44409 1.90344 2.14439 2.18569 1.90297C2.46297 1.66593 2.78752 1.49061 3.13776 1.38864C3.48801 1.28667 3.85594 1.26039 4.21712 1.31154C9.5253 2.19253 14.3813 4.83793 18 8.82011M18 34.7144V8.82011M18 34.7144C21.7665 30.5676 26.8745 27.8816 32.4257 27.1287C33.0575 27.0588 33.6411 26.7573 34.0637 26.2824C34.4864 25.8075 34.7181 25.1929 34.7143 24.5573V3.85725C34.7143 3.48583 34.6339 3.11882 34.4785 2.78145C34.3231 2.44409 34.0965 2.14439 33.8143 1.90297C33.537 1.66593 33.2124 1.49061 32.8622 1.38864C32.512 1.28667 32.144 1.26039 31.7828 1.31154C26.4747 2.19253 21.6187 4.83793 18 8.82011"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_254">
                  <rect width="36" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {/* Text */}
            <span className="text-white">{title}</span>
          </div>
        ))}
      </div>

      {selectedTitle === "Director" && (
        <div>
          <h1 className="ml-[567px] text-[#1A2338] font-bold text-3xl">
            Director and Trustees
          </h1>
          <div className=" bg-white custom-shadow flex justify-between items-start ">
            {/* Left Section */}
            <div className="flex items-center space-x-10">
              <div className="w-56 h-50 bg-gray-300 shadow mb-8">
                <img src="image7.png" alt="images" />
              </div>

              <div className="flex flex-col space-y-1">
                <p className="font-Roboto font-bold text-lg text-black">
                  Mr. Iran Fakir
                </p>
                <p className="font-Roboto font-bold text-lg text-blue-700">
                  Lorem ipsum
                </p>
                <p className="font-Roboto font-bold text-lg text-blue-700">
                  Lorem ipsum
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col space-y-4">
              <p className="font-Roboto font-bold text-lg text-black">
                Mr. Name of the person
              </p>
            </div>
          </div>
        </div>
      )}

      {selectedTitle === "Administrative" && (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[#1A2338] font-bold text-3xl mb-10">
            Administrative Leadership
          </h1>

          {/* The main image and name */}
          <div className="flex flex-col items-center mb-[42px]">
            <div className="w-56 h-60 bg-gray-300 mb-4">
              <img src="/image7.png" alt="Images" />
            </div>
            <p className="font-Roboto font-bold text-lg text-black">
              Mr. Iran Fakir
            </p>
          </div>

          {/* 3 additional images */}
          {/* <div className="flex justify-between w-full">
            <div className="w-56 h-60 bg-gray-300">
              <img src="/image7.png" alt="Images" />
            </div>
            <div className="w-56 h-60 bg-gray-300">
              <img src="/image7.png" alt="Images" />
            </div>
            <div className="w-56 h-60 bg-gray-300">
              <img src="/image7.png" alt="Images" />
            </div>
          </div> */}
        </div>
      )}

      {selectedTitle === "Leadership" && (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[#1A2338] font-bold text-3xl mb-10">
            Leadership Core Team
          </h1>
          <div className="flex flex-col items-center mb-[42px]">
            <div className="w-56 h-60 bg-gray-300 mb-4">
              <img src="/image7.png" alt="Images" />
            </div>
            <p className="font-Roboto font-bold text-lg text-black">
              Mr. Iran Fakir
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export default Director;
