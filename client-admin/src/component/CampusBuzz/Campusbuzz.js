import React from "react";
import Publish from "../Buttons/publishButton";
import Heading from "../Home/Heading";
import FormUI from "./Date";
import SaveButton from "../Buttons/saveButton";

const Campusbuzz = () => {
  return (
    <>
      <div className="bg-[#F1F5F9] bg-cover w-[88vw] h-full">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <h1
              className="lg:ml-[40px] lg:mt-[24px] 2xl:ml-[90px] 2xl:mt-[48px] font-Roboto font-semibold lg:text-2xl 2xl:text-4xl text-[#1A2338]"
              style={{ lineHeight: "78px" }}
            >
              Our Activities
            </h1>
            <p className="font-bold lg:text-lg 2xl:text-xl text-sm 2xl:ml-[90px] lg:ml-[40px] text-[#1A2338B2] ">
              News & Events
            </p>
          </div>
          <div className="2xl:ml-[180px] lg:ml-[20px]">
            <Publish />
          </div>
        </div>
        <div>
          <Heading />
        </div>
        <button
          className=" 2xl:ml-[860px] 2xl:mt-[8px] lg:ml-[600px]  w-[134px] h-[50px]  border-2 border-gray-500 rounded-lg mt-[4px]"
          // onClick={handleAddRow}
        >
          ADD ROW +
        </button>
        <div>
          <p className=" 2xl:ml-[90px] lg:ml-[40px]  font-bold text-xl text-[#1A2338B2]">
            Newsletters Page
          </p>
        </div>

        <div className="2xl:ml-[90px] ml-[20px] lg:ml-[40px]  2xl:w-[934px] 2xl:h-[502px] lg:w-[700px] lg:h-[320px] rounded-3xl  bg-[#FFFFFF]">
          <div>
            <FormUI />
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <label className=" ml-[30px] mt-[27px] 2xl:text-lg lg:text-sm font-semibold text-[#1A233899]">
                Description
              </label>
              <textarea
                className=" ml-[30px] border border-1 border-[#0000003B] px-12 py-2 rounded 2xl:text-sm lg:text-sm font-semibold text-[#1A233899] 2xl:w-[460px] lg:w-[360px] 2xl:h-[180px] lg:h-[130px]"
                //   value={editableChapter?.chapterDescription || ""}
                placeholder="Type Description ...."
                name="chapterDescription"
                //   onChange={InputChange}
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label className=" ml-[30px] mt-[27px] 2xl:text-lg lg:text-sm font-semibold text-[#1A233899]">
                UploadPDF
              </label>
              <div className=" ml-[30px] border-dotted border-2 border-[#0000001f] px-12 py-2 rounded 2xl:text-sm lg:text-sm font-semibold text-[#1A233899] 2xl:w-[390px] lg:w-[360px] 2xl:h-[152px] lg:h-[130px]">
                <div className="2xl:mt-[34px] lg:mt-[24px] 2xl:ml-[100px] lg:ml-[50px]">
                  <img src="/upload.png" alt="pdf" />
                </div>
                <p className="text-sm text-[#000] mt-[11px]">
                  <span className="font-normal text-sm text-[#2196F3 ]">
                    click to upload
                  </span>{" "}
                  "Drag and Drop"
                </p>
                <p className=" text-xs text-gray-400">
                  SVG, PNG, JPG or GIF (max. 3MB)
                </p>
              </div>
              <div className="2xl:ml-[230px]">
                <SaveButton />
              </div>
            </div>
          </div>
          <button
            className=" 2xl:ml-[760px] 2xl:mt-[8px] lg:ml-[600px]  w-[134px] h-[50px]  border-2 border-gray-500 rounded-lg mt-[4px]"
            // onClick={handleAddRow}
          >
            ADD ROW +
          </button>
        </div>
      </div>
    </>
  );
};

export default Campusbuzz;
