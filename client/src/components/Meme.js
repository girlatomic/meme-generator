import React from "react";
import placeholder from "../images/placeholder.jpeg";
import "./Meme.css";
import { saveAs } from "file-saver";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";

export default function Meme({
  uploadedFile,
  topText,
  bottomText,
  selectedColor,
}) {
  //   const handleDownload = () => {
  //     var canvas = document.getElementById("meme-download");
  //     canvas.toBlob(function (blob) {
  //       saveAs(blob, `${uploadedFile.name}.png`);
  //     });
  //   };

  const handleDownload = (e) => {
    htmlToImage
      .toPng(document.getElementById("meme-download"))
      .then((dataUrl) => {
        download(dataUrl, `${uploadedFile.name}.png`);
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
      <button type="submit" value="Save" onClick={handleDownload}>
        Download Meme
      </button>
    </div>
  );
}
