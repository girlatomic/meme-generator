import React from "react";
import placeholder from "../images/placeholder.jpeg";
import "./Meme.css";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";

export default function Meme({
  uploadedFile,
  topText,
  bottomText,
  selectedColor,
}) {
  const handleDownload = (e) => {
    htmlToImage
      .toPng(document.getElementById("meme-download"))
      .then((dataUrl) => {
        download(dataUrl, `${uploadedFile.fileName}`);
      });
  };
  return (
    <div>
      <div className="meme" width="300" height="300" id="meme-download">
        <img src={uploadedFile.filePath} />
        <h4 className="apply-font" id="top" style={{ color: selectedColor }}>
          {topText}
        </h4>
        <h4 className="apply-font" id="bottom" style={{ color: selectedColor }}>
          {bottomText}
        </h4>
      </div>
      <button
        className="btn btn-primary mt-3"
        type="submit"
        value="Save"
        onClick={handleDownload}
      >
        <i class="fa-solid fa-download"></i> Download Meme
      </button>
    </div>
  );
}
