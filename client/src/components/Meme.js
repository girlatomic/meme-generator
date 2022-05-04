import React from "react";
import placeholder from "../images/placeholder.jpeg";
import "./Meme.css";

export default function Meme({
  uploadedFile,
  topTextN,
  bottomText,
  selectedColor,
}) {
  return (
    <div>
      <div className="meme">
        <img src={uploadedFile.filePath} />
        <h4 className="apply-font" id="top" style={{ color: selectedColor }}>
          {topTextN}
        </h4>
        <h4 className="apply-font" id="bottom" style={{ color: selectedColor }}>
          {bottomText}
        </h4>
      </div>
    </div>
  );
}
