import React, { useState } from "react";

import SaveButton from "../Buttons/saveButton";
const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [savedImage, setSavedImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleImageChange({ target: { files: [file] } });
  };
  const handleCancel = () => {
    setImage(null); // Remove the uploaded image.
  };

  const handleSave = () => {
    setSavedImage(image); // Store the current image in savedImage state
    setImage(null); // Remove the preview from the UI
    // Here, you can also send the savedImage to a backend server or any other logic you want
  };
  return (
    <div>
      <div
        className="2xl:w-[572px] 2xl:h-[263px] lg:w-[500px] lg:h-[220px] bg-[#C2C2C2] 2x:ml-[32px] lg:ml-[45px] mr-[32px] mb-[132px] relative"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        {!image ? (
          <div className="2xl:ml-[32px] lg:ml-[90px] flex flex-col items-center justify-center 2xl:w-[378px] lg:w-[250px] 2xl:h-[152px] lg:h-[150px] lg:pt-[20px] rounded bg-[#C2C2C28F]">
            <img
              src="/Vector.png"
              alt="upload-icon"
              className="pt-[70px]  2xl:pl-[50px] lg:pl-[10px]"
            />

            <p className="font-[Roboto] text-sm lg:text-xs text-gray-500   mt-[11px] 2xl:ml-[150px] lg:ml-[50px]">
              "Drag & Drop" or <br /> "Double click to upload image"
            </p>
          </div>
        ) : (
          <img
            src={image}
            alt="Uploaded Preview"
            className="max-w-full max-h-full rounded"
          />
        )}
        <input
          type="file"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={handleImageChange}
          accept="image/png, image/jpeg, image/gif, image/svg"
        />
      </div>
      <div className="font-[Roboto] absolute bottom-[40px] 2xl:ml-[480px] lg:ml-[400px] transform -translate-x-1/2">
        <p className="text-xs text-gray-400">SVG, PNG, JPG or GIF (max. 5MB)</p>
      </div>
      <div className="absolute bottom-[30px] 2xl:ml-[480px] lg:ml-[400px] transform -translate-x-1/2">
        <SaveButton onSave={handleSave} onCancel={handleCancel} />
      </div>
    </div>
  );
};

export default ImageUpload;
