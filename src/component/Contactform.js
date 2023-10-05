import React, { useState } from "react";

const Contactform = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <div className="bg-[#fff] flex flex-col lg:flex-row mt-8 p-6">
        <div className=" lg:p-4 lg:mt-20   lg:ml-[4px] ml-[24px]">
          <p className="lg:w-[432px] w-[310px] lg:text-[#A3A3A3] text-[#000] font-Roboto lg:text-[36px]  text-lg font-extrabold leading-[130%]">
            SUBMIT AN ONLINE ENQUIRY OR GIVE US YOUR FEEDBACK
          </p>
        </div>

        <div className="flex-1 p-4 lg:ml-[130px] ">
          <form>
            <div className="mb-4 lg:mt-[64px] mt-[37px]">
              <label className="block">
                Name <span className="text-red-500">*</span>
                <input
                  type="text"
                  placeholder=""
                  className="mt-2 p-2 w-full border rounded"
                />
              </label>
            </div>

            <div className="mb-4">
              <label className="block">
                Email <span className="text-red-500">*</span>
                <input
                  type="email"
                  placeholder=""
                  className="mt-2 p-2 w-full border rounded"
                />
              </label>
            </div>

            <div className="mb-4">
              <label className="block">
                Phone <span className="text-red-500">*</span>
                <input
                  type="tel"
                  placeholder=""
                  className="mt-2 p-2 w-full border rounded"
                />
              </label>
            </div>

            <div className="mb-4">
              <label className="block">
                Subject
                <input
                  type="text"
                  placeholder=""
                  className="mt-2 p-2 w-full border rounded"
                />
              </label>
            </div>

            <div className="mb-4">
              <label className="block">
                Catagory of Enquiry
                <input
                  type="text"
                  placeholder=""
                  className="mt-2 p-2 w-full border rounded"
                />
              </label>
            </div>

            <div className="">
              <textarea
                placeholder=""
                className="p-2 w-full border rounded"
                rows="4"
              ></textarea>
            </div>

            {/* Include your Captcha component here */}
            <div
              className="mb-16 mt-[28px] w-[247px] h-[71px] relative cursor-pointer"
              onClick={() => setIsChecked(!isChecked)}
            >
              <img
                src={isChecked ? "/Robot1.png" : "/Robot.png"}
                alt="Captcha"
              />
            </div>

            <div className="w-[111px] h-[45px] lg:w-[186px] lg:h-[56px] lg:mt-[21px]  lg:mb-4 py-[18px] px-[20px] justify-center items-center  border rounded-md  border-[#000] ">
              <button
                type="submit"
                className=" items-center font-medium  bg-[#fff] text-[#1A2338]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
