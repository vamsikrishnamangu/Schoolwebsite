import React from "react";
import SaveButton from "../Buttons/saveButton";

const Heading = () => {
  return (
    <>
      <div className="2xl:ml-[90px] ml-[20px] lg:ml-[40px]  2xl:w-[934px] 2xl:h-[502px] lg:w-[700px] lg:h-[320px] rounded-3xl  bg-[#FFFFFF]">
        <div className="flex flex-row">
          <div className="flex flex-col font-roboto-sans">
            <label className="ml-[30px] mt-[27px] 2xl:text-lg lg:text-sm font-semibold text-[#1A233899]">
              Heading
            </label>

            <input
              type="text"
              className=" mt-[4px] ml-[30px]  border border-1 border-[#0000003B] px-12 py-2 2xl:w-[460px] 2xl:h-[56px] lg:w-[350px] lg:h-[40px]  rounded"
              //   value={editableChapter?.chapterName || ""}
              placeholder="Type heading here ....."
              name="Heading"
              //   onChange={InputChange} border: 1px solid #0000003B4px
            />
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

          <div className="flex flex-col font-roboto-sans">
            <h1 className="2xl:ml-[32px] lg:ml-[32px] pt-[26px] font-bold text-sm  text-[#1A233899]">
              Photo
            </h1>
            <div className="2xl:ml-[32px] lg:ml-[33px] flex flex-col items-center justify-center 2xl:w-[378px] lg:w-[250px] 2xl:h-[152px] lg:h-[150px] lg:pt-[20px] rounded bg-[#C2C2C28F]">
              <img src="/Vector.png" alt="upload-icon" className="" />
              <p className="text-sm text-gray-500 mt-[11px]">
                "Drag & Drop" or <br /> "Double click to upload image"
              </p>
            </div>
            <p className="2xl:ml-[224px] lg:ml-[100px] lg:mt-[4px] text-xs text-gray-400">
              SVG, PNG, JPG or GIF (max. 5MB)
            </p>
            <div className="lg:ml-[80px] 2xl:mt-[197px] lg:mt-[40px] 2xl:ml-[200px] ">
              <SaveButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
