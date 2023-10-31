import React, { useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

const Life = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleExpand = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null); // Collapse the section if it's already expanded
    } else {
      setExpandedSection(section); // Expand the new section
    }
  };

  return (
    <>
      <div className="ml-[70px] lg:mt-[24px] mt-[30px]">
        <h1 className="lg:ml-[106px] font-Roboto font-bold lg:text-4xl text-2xl ">
          Life at St. Michael’s
        </h1>
      </div>
      <div className=" lg:ml-[4px] ml-[24px] flex flex-col sm:flex-row 2xl:justify-around lg:justify-center lg:gap-[32px]">
        {/* content */}
        <div
          className={`py-6 px-5 ${
            expandedSection === "section1" ? "w-[400px]" : "w-72"
          } h-96 mt-[17px] ml-[24px] rounded-2xl bg-[#1A2338] text-white flex flex-col items-center gap-2.5 transition-all duration-500 ease-in-out`}
        >
          {/* Image */}
          <img src="/Group3.png" alt="Group3" className="w-20 h-20 mb-3" />

          {/* Title */}
          <h2 className="font-bold text-xl ">Our Guiding Principles</h2>
          <div className="w-60 border border-1px border-white bg-white"></div>

          {/* Description */}
          <p
            className={`text-sm mb-3 ${
              expandedSection === "section1" ? "w-full" : "w-4/5"
            } text-left`}
          >
            Our school champions a holistic education rooted in experiential
            learning, fostering intellectual, emotional, and social growth
            {expandedSection === "section1" &&
              " Additional text that appears when expanded."}
          </p>

          {/* Learn More Button */}
          <button
            onClick={() => toggleExpand("section1")}
            className="font-medium text-center leading-4 text-base bg-white py-[12px] lg:mb-4 px-[20px] rounded-lg text-[#1A2338] mt-auto"
          >
            {expandedSection === "section1" ? "Close" : "Learn More"}
          </button>
        </div>

        <div
          className={`py-6 px-5 ${
            expandedSection === "section2" ? "w-[400px] h-[400px]" : "w-72 h-96"
          } mt-[17px] ml-[24px] rounded-2xl bg-[#1A2338] text-white flex flex-col items-center gap-2.5 transition-all duration-500 ease-in-out`}
        >
          {/* Image */}
          <img src="/Group4.png" alt="Group3" className="w-20 h-20 mb-3" />

          {/* Title */}
          <h2 className="font-bold text-xl ">
            Our Unique Teaching Methodology
          </h2>
          <div className="w-60  border border-1px border-white bg-white"></div>

          {/* Description */}
          <p
            className={`text-sm mb-3 ${
              expandedSection === "section2" ? "w-full" : "w-4/5"
            } text-left`}
          >
            Our "Think, Say, and Do" methodology melds cognitive development,
            effective communication, and hands-on learning to
            {expandedSection === "section2" &&
              " Additional text that appears when expanded."}
          </p>

          {/* Learn More Button */}
          <button
            onClick={() => toggleExpand("section2")}
            className="font-medium text-center leading-4 text-base bg-white py-[12px] lg:mb-4 px-[20px] rounded-lg text-[#1A2338] mt-auto"
          >
            {expandedSection === "section2" ? "Close" : "Learn More"}
          </button>
        </div>
        <div
          className={`py-6 px-5 ${
            expandedSection === "section3" ? "w-[400px] h-[400px]" : "w-72 h-96"
          } mt-[17px] ml-[24px] rounded-2xl bg-[#1A2338] text-white flex flex-col items-center gap-2.5 transition-all duration-500 ease-in-out`}
        >
          {/* Image */}
          <img src="/Group5.png" alt="Group3" className="w-15 h-15 mb-3" />

          {/* Title */}
          <h2 className="font-bold text-xl ">Inclusive Education</h2>
          <div className="w-60 border border-1px border-white bg-white"></div>

          {/* Description */}
          <p
            className={`text-sm mb-3 ${
              expandedSection === "section3" ? "w-full" : "w-4/5"
            } text-left`}
          >
            Our Inclusive Education model celebrates diversity and individual
            strengths, employing a personalized, multi-disciplinary approach
            {expandedSection === "section3" &&
              " Additional text that appears when expanded."}
          </p>

          {/* Learn More Button */}
          <button
            onClick={() => toggleExpand("section3")}
            className="font-medium text-center leading-4 text-base bg-white py-[12px] lg:mb-4 px-[20px] rounded-lg text-[#1A2338] mt-auto"
          >
            {expandedSection === "section3" ? "Close" : "Learn More"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Life;
