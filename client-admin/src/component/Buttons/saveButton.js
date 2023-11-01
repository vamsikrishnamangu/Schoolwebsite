import React from "react";
import Button from "@mui/material/Button";
const SaveButton = ({ onSave, onCancel }) => {
  return (
    <>
      <div className="font-roboto-sans mb-[32px]  2xl:mt-[30px] lg:mt-[13px] flex flex-row space-x-4 ">
        <Button
          variant="outlined"
          onClick={onCancel}
          style={{
            borderColor: "#2196F3",
            color: "#2196F3",
            fontSize: "14px",
            fontWeight: "500px",
            borderRadius: "4px",
            padding: "10px,18px",
          }}
        >
          CANCEL
        </Button>

        <Button
          variant="contained"
          onClick={onSave}
          style={{
            backgroundColor: "#5BD877",
            color: "#fff",
            padding: "10px,18px",
            fontSize: "14px",
            fontWeight: "500px",
            borderRadius: "4px",
          }}
        >
          SAVE
        </Button>
      </div>
    </>
  );
};

export default SaveButton;
