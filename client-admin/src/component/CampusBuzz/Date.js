import React, { useState } from "react";

function FormUI() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <div className="flex space-x-4 mb-6 2xl:pt-[15px] lg:pt-[10px] 2xl:ml-[37px] lg:ml-[27px]">
          <div className="flex flex-col w-[111px] h-[40px]">
            <label className="mb-2 font-medium">Month</label>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-4 py-2 border rounded"
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col w-[111px] h-[40px]">
            <label className="mb-2 font-medium">Year</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 border rounded"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>{" "}
        <div className="flex flex-col font-[Roboto]">
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
        </div>
      </div>
      <div className="flex flex-col 2xl:ml-[10px] font-[Roboto]">
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
      </div>
    </div>
  );
}

export default FormUI;
