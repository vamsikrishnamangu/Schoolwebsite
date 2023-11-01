import React, { useState } from "react";

const VisitAdmission = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const handleSubmit = () => {
    setModalOpen(false);
    setShowThankYou(true);
  };

  const closeThankYou = () => {
    setShowThankYou(false);
  };
  return (
    <div>
      <div className="ml-[7rem] mt-[1rem]">
        <h1 className="font-roboto-sans text-[#1A2338] lg:mt-[40px] font-Roboto lg:text-4xl  text-lg mt-[28px] font-bold">
          In This Section
        </h1>
      </div>

      <div className="flex flex-row">
        <div className=" font-roboto-sans flex flex-col ml-[7rem]">
          <img
            className="mt-[5rem] w-[73px] h-[73px]"
            src="/assignment.svg"
            alt="img"
          />
          <p className=" mt-[1.5rem] font-normal text-xl text-[#000] line-height:1.75rem ">
            Complete the Online Application Form: Visit our official admissions
            portal to fill out the online form and submit any necessary
            accompanying documents.
          </p>
          <div className="flex items-center mt-2">
            <h1 className="text-2xl font-bold border-b-2 pb-1 mr-2">
              Fill Form
            </h1>
            <span className="text-xl">&#x2192;</span>{" "}
          </div>
        </div>
        <div className="font-roboto-sans flex flex-col ml-[7rem]">
          <img
            className="mt-[5rem] w-[73px] h-[73px]"
            src="/phoneImage.svg"
            alt="img"
          />
          <p className=" mt-[1.5rem] font-normal text-xl text-[#000] line-height:1.75rem ">
            Request a Callback from the Admissions Office: If you have specific
            queries or would like to discuss your child's educational needs, you
            can request a callback for a more personalized conversation.
          </p>
          <div className="flex items-center mt-2">
            <h1 className="text-2xl font-bold border-b-2 pb-1 mr-2">Call us</h1>
            <span className="text-xl">&#x2192;</span>{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-row font-roboto-sans">
        <div className="font-roboto-sans flex flex-col ml-[7rem]">
          <img
            className="w-[73px] h-[73px] mt-[5rem]"
            src="/accountImage.svg"
            alt="img"
          />
          <p className=" mt-[1.5rem] font-normal text-xl text-[#000] line-height:1.75rem ">
            Complete the Online Application Form: Visit our official admissions
            portal to fill out the online form and submit any necessary
            accompanying documents.
          </p>
          <div className="flex items-center mt-2">
            <h1 className="text-2xl font-bold border-b-2 pb-1 mr-2">
              Campus Visit
            </h1>
            <span className="text-xl">&#x2192;</span>{" "}
          </div>
        </div>
        <div className="font-roboto-sans flex flex-col ml-[7rem]">
          <img
            className="w-[73px] h-[73px] mt-[5rem]"
            src="/inbox.svg"
            alt="img"
          />
          <p className=" mt-[1.5rem] font-normal text-xl text-[#000] line-height:1.75rem ">
            Complete the Online Application Form: Visit our official admissions
            portal to fill out the online form and submit any necessary
            accompanying documents.
          </p>
          <div className="flex items-center mt-2">
            <h1
              onClick={openModal}
              className="text-2xl font-bold border-b-2 pb-1 mr-2 cursor-pointer"
            >
              Email Us
            </h1>
            <span className="text-xl">&#x2192;</span>{" "}
          </div>
        </div>
        {isModalOpen && (
          <div className=" shadow-md fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-5 max-w-lg w-full relative">
              <div className=" font-roboto-sans lg:ml-[3rem] lg:mt-[4rem] flex flex-col space-y-4">
                <div className="mb-4">
                  <label className="block text-black font-normal text-xl">
                    Name of the Parent <span className="text-red-500">*</span>
                    <input
                      type="email"
                      placeholder=""
                      className="mt-2 p-2 w-full border rounded"
                    />
                  </label>
                </div>
                <div className="mb-4">
                  <label className="block text-black font-normal text-xl">
                    Mobile Number <span className="text-red-500">*</span>
                    <input
                      type="email"
                      placeholder=""
                      className="mt-2 p-2 w-full border rounded"
                    />
                  </label>
                </div>
                <div className="mb-4">
                  <label className="block text-black font-normal text-xl">
                    Email ID <span className="text-red-500">*</span>
                    <input
                      type="email"
                      placeholder=""
                      className="mt-2 p-2 w-full border rounded"
                    />
                  </label>
                </div>
                <div className="relative">
                  <label className="block text-black font-normal text-xl">
                    Which class admission are you loojin for
                    <select className="mt-2 p-2 w-full border rounded">
                      <option value="option1">play School</option>
                      <option value="option2">pre-primary school</option>
                      <option value="option1">primary School</option>
                    </select>
                  </label>
                </div>
                <div className="flex justify-between lg:mt-[4rem] ">
                  <div className="flex justify-between lg:space-x-44">
                    <button
                      onClick={closeModal}
                      className="bg-[#fff] py-[10px] px-[20px] text-[#1A2338] font-bold ml-[2rem]"
                    >
                      Close
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="bg-[#1A2338] text-white py-[10px] px-[20px] rounded-lg"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {showThankYou && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="font-roboto-sans bg-white rounded-lg p-5 max-w-lg w-full relative text-center space-x-4s">
              <h2 className="text-4xl  font-bold mt-[10rem]">Thank You</h2>
              <p className="font-roboto  text-2xl font-medium mb-4">
                We will call you back.
              </p>
              <button
                onClick={closeThankYou}
                className="text-[#1A2338] mt-[8rem] font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="font-roboto-sans mt-[7rem] text-center items-center">
        <button className="font-3xl font-bold text-[#1A2338] py-[12px] px-[20px] rounded-md border border-[#1A2338]">
          Download Fee Structure
        </button>
      </div>
      <div>
        <p className=" font-roboto-sans font-normal text-2xl text-black mt-[3.5rem] ml-[8rem] mb-[4.9rem]  ">
          “We offer a variety of options to accommodate your preferences and
          make the admissions process as seamless as possible.”
        </p>
      </div>
    </div>
  );
};

export default VisitAdmission;
