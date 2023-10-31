import React, { useState } from "react";

const Classroom = () => {
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
      <div className="mt-20 ml-20">
        <h1 className="font-bold lg:text-4xl text-3xl lg:ml-[84px] ">
          Beyond Classroom
        </h1>
      </div>
      <div className="flex justify-center items-start">
        <div className="flex flex-col py-[4px] px-[2px] ml-[106px]">
          <div>
            <img
              className="lg:h-64 lg:w-64 w-[199px] h-[199px] "
              style={{ borderRadius: "199px" }}
              src="/Ellipse 1.png"
              alt="Ellipse"
            />
          </div>
          <div className="flex flex-col gap-3.5 space-x-2 mt-7">
            <img
              className="lg:h-11 lg:w-11 w-[26px] h-[26px] "
              src="/Group6.png"
              alt="power"
            />

            <div className="font-bold lg:text-2xl text-md ml-[8px] text-[#1A2338] ">
              <p className="">Extra-curricular Activities</p>

              <p
                className="lg:text-lg text-md font-normal  mt-2  text-[#1A2338] "
                style={{ lineHeight: "26px" }}
              >
                Our Extra-Curricular Activities provide a balanced education by
                developing essential life skills and fostering teamwork and
                leadership.
              </p>
            </div>
          </div>

          <button className="font-medium text-center leading-4 text-base bg-white py-3 px-5 w-[187px] h-[56px] mt-4 rounded-lg text-[#1A2338] border border-[#1A2338]">
            Learn More
          </button>
        </div>
        <div className="self-stretch w-0.5 bg-[#1A2338] mx-[24px]"></div>
        <div className="flex flex-col ml-[57px]  py-[12px] px-[2px]">
          <img
            className="lg:h-64 lg:w-64 w-[199px] h-[199px]  "
            src="/Ellipse 2.png"
            alt="Ellipse"
          />
          <div className="flex flex-col gap-3.5  mt-7 ">
            <img className="h-11 w-11" src="/Group7.png" alt="power" />
            <div className="font-bold text-2xl  text-[#1A2338]">
              Power of One
              <p
                className="text-lg font-normal  mt-2 text-[#1A2338]"
                style={{ lineHeight: "26px" }}
              >
                The "Power of One" program cultivates empathy and communal
                responsibility, showing students that individual acts can make a
                big difference.
              </p>
            </div>
          </div>
          <button className="font-medium text-center leading-4 text-base bg-white py-3 px-5 w-[187px] h-[56px] mt-4 rounded-lg text-[#1A2338] border border-[#1A2338]">
            Learn More
          </button>
        </div>
        <div className="self-stretch w-0.5 bg-[#1A2338] mx-[24px]"></div>
        <div className="flex flex-col ml-[57px]">
          <img
            className="lg:h-64 lg:w-64 w-[199px] h-[199px]"
            src="/Ellipse 3.png"
            alt="Ellipse"
          />
          <div className="flex flex-col gap-3.5  mt-7">
            <div className="gap-4">
              <img className="h-11 w-11" src="/Group8.png" alt="power" />
              <div className="font-bold text-2xl  text-[#1A2338]">
                Enrichment Activities
                <p
                  className="text-lg font-normal mt-2 text-[#1A2338]"
                  style={{ lineHeight: "26px" }}
                >
                  Our Enrichment Activities extend learning beyond the
                  classroom, fostering intellectual curiosity and social skills.
                  through arts, STEM, and more.
                </p>
              </div>
            </div>
          </div>
          <button className="font-medium text-center leading-4 text-base bg-white py-3 px-5 w-[187px] h-[56px] mt-4 rounded-lg text-[#1A2338] border border-[#1A2338]">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Classroom;
