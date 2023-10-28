import React, { useState } from "react";
import { HiX } from "react-icons/hi";

const Activityehead = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      {/* Original Image */}
      <div className="relative w-full" onClick={() => setModalOpen(true)}>
        <img
          src="/ActivityImage.svg"
          alt="images"
          className="lg:w-full lg:h-1/2 w-[453px] h-[222px]"
        />
        <div className="absolute top-0 left-0 p-4">
          <p className="text-white font-bold lg:text-3xl text-sm lg:ml-40 lg:mt-48 mt-[89px] ml-[80px]">
            LIFE AT ST. MICHAEL’S
          </p>
          <p className="lg:mt-8 lg:text-6xl text-lg font-Roboto font-extrabold ml-40 text-[#FFA901]">
            Our Activities
          </p>
        </div>
      </div>

      {/* Modal (Popup) */}
      {/* Modal (Popup) */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white p-10 rounded">
            {" "}
            {/* Add 'relative' here */}
            <img
              src="/image.png"
              alt="Modal"
              style={{
                width: "1022px",
                height: "749px",
                background: "url(/image.png), lightgray 50% / cover no-repeat",
              }}
            />
            <p
              style={{
                width: "867px",
                height: "72px",
                color: "#000",
                fontFamily: "Roboto",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "28.831px",
              }}
            >
              Lorem ipsum dolor sit amet...
            </p>
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-2 p-2"
            >
              <HiX className=" cursor-pointer text-[#000]" size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Activityehead;
