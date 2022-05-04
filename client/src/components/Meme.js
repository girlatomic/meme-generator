import React from "react";
import placeholder from "../images/placeholder.jpeg";

export default function Meme({ uploadedFile, topTextN, bottomText }) {
  return (
    <div>
      <div className="card bg-dark text-white">
        <img src={uploadedFile.filePath} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">{topTextN}</h5>
          <h5 className="card-footer">{bottomText}</h5>
        </div>
      </div>
    </div>
  );
}
