import React from "react";

const Guiding = () => {
  return (
    <div>
      <div className="relative  bg-[#1A2338] flex items-center justify-center">
        <p
          className="text-[#FFF] font-Inter italic font-normal text-2xl"
          style={{ lineHeight: "128%" }}
        >
          Our core values include: Excellence: We relentlessly pursue excellence
          in all aspects of education, challenging our students to reach their
          full potential academically, creatively, and ethically.
          <br />
           Innovation: We embrace innovation as a cornerstone of education. Our
          students are encouraged to think critically, solve problems, and adapt
          to the ever-evolving digital landscape.
          <br />
           Integrity: We instill in our students the importance of honesty,
          respect, and ethical behavior, ensuring they become responsible and
          principled leaders.
          <br />
           Community: We foster a sense of belonging and interconnectedness
          among students, parents, and the wider community. Together, we create
          a supportive and inclusive environment.
          <br />
           Collaboration: We promote collaboration and partnerships with
          industry leaders, educational experts, and the community to provide
          students with real-world insights and mentorship opportunities.
          <br />
           Empowerment: We empower our educators through continuous professional
          development, enabling them to employ innovative teaching methods and
          stay at the forefront of educational practices.
          <br />
           Our mission is to guide students at St. Michael's School to become
          confident, adaptable, and purpose-driven individuals. By blending
          practical education with these core values, we equip our students to
          excel in an ever-changing world and to make a positive impact on
          society.
          <br />
           At St. Michael's School, we are not merely educators; we are mentors,
          guides, and champions of holistic development. Our mission is to
          illuminate the path to success for each student, inspiring them to
          become responsible, innovative, and compassionate global citizens."
        </p>
      </div>
      <div className="bg-[#fff] lg:mt-[54px] lg:ml-[84px] hidden lg:block">
        <h1 className="text-[#1A2338] font-Roboto text-3xl font-bold">
          Life at St. Michael’s
        </h1>
      </div>

      <div className="relative w-full h-auto">
        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row  justify-between lg:items-center ">
          {/* Text content for Section 1 */}
          <div className="flex flex-col lg:ml-[79px] ml-[25px] ">
            <h1 className="lg:mt-[115px] mt-[39px] text-[#1A2338] font-Roboto font-bold lg:text-3xl text-xl">
              Guiding Principles
            </h1>
            <p className="lg:mt-[30px] mt-[17px] font-Roboto font-normal lg:text-xl text-sm text-black">
              Lorem ipsum dolor sit amen porta
            </p>
            <p className="lg:mt-[30px] mt-[17px] font-Roboto font-normal lg:text-lg text-xs text-black">
              Lorem ipsum dolor sit amet consectetur. Consectetur mi vestibulum
              nunc posuere id sapien porta purus. Lorem
            </p>
            <div className="mb-4 mt-[17px] lg:mt-[30px]   lg:py-[10px] lg:px-[20px]  px-[4px] py-[8px] w-[104px] lg:w-[144px]   border-[1px] border-solid border-[#1A2338] rounded-lg justify-center items-center  bg-[#FFF]">
              <button className="font-Roboto font-medium lg:text-md text-xs text-[#1A2338] ml-4 lg:text-center">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex-shrink-0 lg:mr-[79px]">
            <img
              src="/aboutImage1.svg"
              alt="Images"
              className="lg:w-[634px] lg:h-[450px] w-[390px] h-[231px] lg:mt-0 mt-[23px]"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse justify-between items-center mt-8">
          <div className="flex flex-col  ml-[25px] ">
            <h1 className="lg:mt-[105px] mt-[24px] text-[#1A2338] font-Roboto font-bold lg:text-3xl text-xl">
              Unique Teaching Methodology
            </h1>
            <p className="lg:mt-[30px] mt-[17px] lg:w-[402px] lg:h-[58px] font-Roboto font-normal lg:text-lg text-xs text-black">
              Lorem ipsum dolor sit amen porta
            </p>
            <p className="lg:mt-[30px] mt-[17px] font-Roboto font-normal lg:text-lg text-xs text-black">
              Lorem ipsum dolor sit amet consectetur. Consectetur mi vestibulum
              nunc posuere id sapien porta purus. Lorem
            </p>
            {/* <div className="items-left mt-[30px]  w-[187px] h-[56px] flex  justify-center border-[2px] border-solid border-[#1A2338] rounded-md">
              <button className="font-Roboto font-medium text-md text-[#1A2338]">
                Learn More
              </button>
            </div> */}
          </div>

          <div className="flex-shrink-0 lg:ml-[79px]">
            <img
              src="/aboutImage2.svg"
              alt="Images"
              className="lg:w-[634px] 2xl:ml-[20px] lg:ml-[84px] lg:h-[450px] w-[390px] h-[231px] lg:mt-0 mt-[23px]"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  justify-between lg:items-center">
          <div className="flex flex-col lg:ml-[79px] ml-[25px] ">
            <h1 className="lg:mt-[115px] mt-[39px] text-[#1A2338] font-Roboto font-bold lg:text-3xl text-xl">
              Inclusive Education
            </h1>
            <p className="lg:mt-[30px] mt-[17px] font-Roboto font-normal lg:text-lg text-xs text-black">
              Lorem ipsum dolor sit amen porta
            </p>
            <p className="lg:mt-[30px] mt-[17px] font-Roboto font-normal lg:text-lg text-xs text-black">
              Lorem ipsum dolor sit amet consectetur. Consectetur mi vestibulum
              nunc posuere id sapien porta purus. Lorem
            </p>
            {/* <div className="items-left mt-[30px]  w-[187px] h-[56px] flex  justify-center border-[2px] border-solid border-[#1A2338] rounded-md">
              <button className="font-Roboto font-medium text-md text-[#1A2338]">
                Learn More
              </button>
            </div> */}
          </div>

          <div className="flex-shrink-0 lg:mr-[79px]">
            <img
              src="/aboutImage3.svg"
              alt="Images"
              className="lg:w-[634px] lg:h-[450px] w-[390px] h-[231px] mt-[23px] lg:mt-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guiding;
