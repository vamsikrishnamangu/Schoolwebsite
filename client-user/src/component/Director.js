import React, { useState } from "react";

const Director = () => {
  const [selectedTitle, setSelectedTitle] = useState(
    "Administrative Leadership"
  );

  const handleTitleClick = (title) => {
    setSelectedTitle(selectedTitle === title ? null : title);
  };

  return (
    <>
      <div className="font-roboto-sans mt-[20px]  w-full h-[112px] bg-[#2E416D] rounded-[3px] flex justify-around items-center px-6">
        {["Administrative Leadership", "Operating Leadership"].map((title) => (
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

      {selectedTitle === "Administrative Leadership" && (
        <div>
          <h1 className="font-roboto-sans  text-center lg:mt-[2.8rem] text-[#1A2338] font-bold text-3xl">
            Director and Trustees
          </h1>
          <div className="mt-2 bg-white custom-shadow py-[64px] px-[84px] shadow-lg rounded-xl ml-[4rem]">
            {/* Left Section */}
            <div className="font-roboto-sans flex flex-col bg-white custom-shadow py-[40px] px-[60px] shadow-lg rounded-xl w-4/5">
              {/* Image Section */}
              <div className="flex justify-start items-center mb-8">
                <img src="image7.svg" alt="images" className="mr-8 w-52 h-64" />{" "}
                <div className="flex flex-col">
                  <p className="font-roboto-sans font-bold text-lg text-black">
                    Mr. J Reddy
                  </p>
                  <p className="font-roboto-sans font-bold text-sm text-[#364C80] mt-2">
                    Managing Director
                  </p>
                </div>
                <p className="font-roboto-sans font-light text-lg text-[#364C80] ml-[5rem]">
                  "Hello and welcome to St. Michael's School, a place where
                  we're deeply committed to nurturing the next generation of
                  learners equipped for the 21st century. Our mission goes
                  beyond textbooks; it's about empowering students with
                  knowledge, skills, and values that transcend conventional
                  education. I'm [Your Name], and I'm honored to lead a
                  dedicated team of educators who are not just here to teach but
                  to inspire, challenge, and mentor students. Our goal is to
                  nurture responsible, innovative, and compassionate global
                  citizens. I invite you to join us on this educational journey
                  where innovation and excellence meet to shape the future."
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedTitle === "Operating Leadership" && (
        <div>
          <h1 className="font-roboto-sans  text-center lg:mt-[2.8rem] text-[#1A2338] font-bold text-3xl">
            Director and Trustees
          </h1>
          <div className="mt-2 bg-white custom-shadow py-[94px] px-[84px] shadow-lg rounded-xl ml-[4rem]">
            {/* Left Section */}
            <div className="font-roboto-sans flex flex-col bg-white custom-shadow py-[40px] px-[60px] shadow-lg rounded-xl w-4/5">
              {/* Image Section */}
              <div className="flex justify-start items-center mb-8">
                <img src="image8.svg" alt="images" className="mr-8 w-52 h-64" />{" "}
                <div className="flex flex-col">
                  <p className="font-roboto-sans font-bold text-lg text-black">
                    Mrs. Radha Rani
                  </p>
                  <p className="font-roboto-sans font-bold text-sm text-[#364C80] mt-2">
                    Principal
                  </p>
                </div>
                <p className="font-roboto-sans font-light text-lg text-[#364C80] ml-[5rem]">
                  As the Principal of St. Michael's School, I am proud to
                  embrace the vision of the National Education Policy (NEP) that
                  emphasizes holistic education. Our curriculum is thoughtfully
                  designed to not only impart knowledge but also to foster
                  literacy, numeracy, and effective communication skills. We are
                  dedicated to equipping our students with the foundational
                  skills they need to excel academically and thrive in the
                  modern world. With a focus on these key aspects, we are
                  committed to shaping well-rounded individuals who are prepared
                  to face the challenges and opportunities of the 21st century
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="font-roboto-sans flex space-x-64 lg:mb-[6rem] lg:mt-[4rem] ml-[16rem]">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl text-[#000] line-height: 1.5rem">
            Mr. J Reddy
          </h1>
          <p className="font-bold text-xl text-[#364C80]">Managing Director</p>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-xl text-[#000] line-height: 1.5rem">
            Mr. J Reddy
          </h1>
          <p className="font-bold text-xl text-[#364C80]">Managing Director</p>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-xl text-[#000] line-height: 1.5rem">
            Mr. J Reddy
          </h1>
          <p className="font-bold text-xl text-[#364C80]">Managing Director</p>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-xl text-[#000] line-height: 1.5rem">
            Mr. J Reddy
          </h1>
          <p className="font-bold text-xl text-[#364C80]">Managing Director</p>
        </div>
      </div>
    </>
  );
};
export default Director;
