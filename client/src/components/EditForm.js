import React, { useEffect, useState } from "react";

export default function EditForm({
  onChangeTxt,
  onChangeBottom,
  topTextN,
  bottomText,
}) {
  // const [topText, setTopText] = useState("");
  // const [bottomText, setBottomText] = useState("");
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");

  // const handleChange = (e) => {
  //   if (e.target.name === "top_text") setTopText(e.target.value);
  //   else setBottomText(e.target.value);
  // };

  //   const handleFontChange = (nextFont) => {
  //     setActiveFontFamily(nextFont.family);
  //   };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div>
      <form>
        <div className="row">
          <div className="input-field">
            <input
              className="form-control"
              type="text"
              id="top_text"
              name="top_text"
              value={topTextN}
              onChange={(e) => onChangeTxt(e.target.value)}
              placeholder="top input"
            />
            <label htmlFor="top_text">Top Text</label>
          </div>
          <div className="input-field">
            <input
              className="form-control"
              type="text"
              name="bottom_text"
              id="bottom_text"
              value={bottomText}
              onChange={(e) => onChangeBottom(e.target.value)}
            />
            <label htmlFor="bottom_text">Bottom Text</label>
          </div>
          <div>
            <input
              type="color"
              className="form-control form-control-color"
              id="exampleColorInput"
              value={selectedColor}
              onChange={handleColorChange}
              title="Choose your color"
            />
            <label htmlFor="exampleColorInput" className="form-label">
              Color picker
            </label>
          </div>
          {/* <div>
            <FontPicker
              apiKey="AIzaSyAo9NRLxexTahY-O8I8GWicDHBZL_Tbnhw"
              activeFontFamily={activeFontFamily}
              onChange={handleFontChange}
            />
          </div> */}
        </div>
      </form>
    </div>
  );
}
