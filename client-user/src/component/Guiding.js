import React from "react";

const Guiding = () => {
  return (
    <>
      <div className="relative  bg-[#1A2338] flex items-center justify-center">
        <div
          className="font-[Inter] text-[#FFF] font-Inter italic font-normal text-xl ml-[5rem] mt-[3.5rem] mb-[4rem] mr-[7rem]"
          style={{ lineHeight: "180%" }}
        >
          <p>
            <span className="font-bold text-xl">
              Our core values include :{" "}
            </span>
            Excellence We relentlessly pursue excellence in all aspects of
            education, challenging our students to reach their full potential
            academically, creatively, and ethically.
          </p>
          <p>
            <span className="font-bold text-xl">Innovation : </span> We embrace
            innovation as a cornerstone of education. Our students are
            encouraged to think critically, solve problems, and adapt to the
            ever-evolving digital landscape.
          </p>
          <p>
            <span className="font-bold text-xl">Integrity : </span> We instill
            in our students the importance of honesty, respect, and ethical
            behavior, ensuring they become responsible and principled leaders.
          </p>
          <p>
            <span className="font-bold text-xl">Community : </span> We foster a
            sense of belonging and interconnectedness among students, parents,
            and the wider community. Together, we create a supportive and
            inclusive environment.
          </p>
          <p>
            <span className="font-bold text-xl">Collaboration : </span> We
            promote collaboration and partnerships with industry leaders,
            educational experts, and the community to provide students with
            real-world insights and mentorship opportunities. Empowerment: We
            empower our educators through continuous professional development,
            enabling them to employ innovative teaching methods and stay at the
            forefront of educational practices.
          </p>
          <p>
            <span className="font-bold text-xl">Our mission</span> is to guide
            students at St. Michael's School to become confident, adaptable, and
            purpose-driven individuals. By blending practical education with
            these core values, we equip our students to excel in an
            ever-changing world and to make a positive impact on society.
          </p>
          <p>
            At St. Michael's School, we are not merely educators; we are
            mentors, guides, and champions of holistic development. Our mission
            is to illuminate the path to success for each student, inspiring
            them to become responsible, innovative, and compassionate global
            citizens.
          </p>
        </div>
      </div>
      <div className="font-roboto-sans bg-[#fff] lg:mt-[3.9rem] lg:ml-[4.8rem] hidden lg:block">
        <h1 className="text-[#1A2338] font-Roboto text-4xl font-bold">
          Life at St. Michael’s
        </h1>
      </div>
      <div className="relative ">
        <div className=" font-roboto-sans flex flex-col lg:flex-row  justify-between lg:items-center ">
          <div className="flex flex-col lg:ml-[79px] ml-[25px] ">
            <h1 className=" text-[#1A2338] font-Roboto font-bold lg:text-3xl text-xl">
              Guiding Principles
            </h1>
            <p className="lg:mt-[30px] mt-[17px] font-Roboto font-normal lg:text-xl text-sm text-black">
              Our school champions a holistic education rooted in experiential
              learning, fostering intellectual, emotional, and social growth
              within a culture of teamwork and ethical values. This integrated
              approach equips students for lifelong success through
              collaboration and practical application of knowledge.
            </p>
          </div>
          <div className="flex-shrink-0 lg:mr-[79px]">
            <img
              src="/aboutImage1.svg"
              alt="Images"
              className="2xl:w-[634px] 2xl:h-[550px] lg:w-[530px] lg:h-[400px] w-[390px] h-[231px]  mt-[23px] lg:ml-[6rem] lg:mt-[3.8rem]"
            />
          </div>
        </div>
        <div className="font-roboto-sans flex flex-col lg:flex-row-reverse justify-between items-center">
          <div className="flex flex-col lg:ml-[79px] ml-[25px] ">
            <h1 className="text-[#1A2338] font-Roboto font-bold lg:text-3xl text-xl">
              Unique Teaching Methodology
            </h1>

            <p className="lg:mr-[2rem] lg:mt-[30px] mt-[17px] font-Roboto font-normal lg:text-xl text-sm text-black">
              Our "Think, Say, and Do" methodology melds cognitive development,
              effective communication, and hands-on learning to foster academic
              excellence and social responsibility. This integrative approach
              equips students for the multifaceted challenges and opportunities
              of the 21st century.
            </p>
          </div>
          <div className="flex-shrink-0 lg:ml-[79px]">
            <img
              src="/aboutImage2.svg"
              alt="Images"
              className="2xl:w-[634px] 2xl:h-[550px] lg:w-[530px] lg:h-[400px] w-[390px] h-[231px] lg:mt-0 mt-[23px]"
            />
          </div>
        </div>
        <div className="font-roboto-sans flex flex-col lg:flex-row  justify-between lg:items-center">
          <div className="flex flex-col lg:ml-[79px] ml-[25px] ">
            <h1 className="lg:mt-[7rem] mt-[39px] text-[#1A2338] font-Roboto font-bold lg:text-3xl text-xl">
              Inclusive Education
            </h1>

            <p className="lg:mt-[2rem] lg:mr-[2rem] mt-[17px] font-Roboto font-normal lg:text-lg text-xs text-black">
              Our Inclusive Education model celebrates diversity and individual
              strengths, employing a personalized, multi-disciplinary approach
              to cultivate academic excellence and social empathy. We aim to
              equip students with the skills and understanding necessary for
              success in a diverse, interconnected world.
            </p>
          </div>
          <div className="flex-shrink-0 lg:mr-[79px]">
            <img
              src="/aboutImage3.svg"
              alt="Images"
              className="2xl:w-[634px] 2xl:h-[550px] lg:w-[530px] lg:h-[400px] w-[390px] h-[231px] mt-[23px] lg:mt-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Guiding;
