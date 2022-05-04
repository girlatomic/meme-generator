import React from "react";
import placeholder from "../images/placeholder.jpeg";

export default function Meme({ uploadedFile, topTextN }) {
  return (
    <div>
      <div className="card bg-dark text-white">
        <img src={uploadedFile.filePath} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">{topTextN}</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div className="card-footer">Last updated 3 mins ago</div>
        </div>
      </div>
    </div>
  );
}
