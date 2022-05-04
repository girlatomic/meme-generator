import React, { useEffect, useState } from "react";
import FontPicker from "font-picker-react";

export default function EditForm({
  onChangeTop,
  onChangeBottom,
  colorChange,
  topText,
  bottomText,
  selectedColor,
  handleFontChange,
  activeFontFamily,
}) {
  // const [topText, setTopText] = useState("");
  // const [bottomText, setBottomText] = useState("");
  // const [selectedColor, setSelectedColor] = useState("#FFFFFF");

  // const handleChange = (e) => {
  //   if (e.target.name === "top_text") setTopText(e.target.value);
  //   else setBottomText(e.target.value);
  // };

  //   const handleFontChange = (nextFont) => {
  //     setActiveFontFamily(nextFont.family);
  //   };

  // const handleColorChange = (e) => {
  //   setSelectedColor(e.target.value);
  // };

  return (
    <div>
      <form>
        <div className="row">
          <div className="input-field">
            <label htmlFor="top_text">Top Text</label>
            <input
              className="form-control"
              type="text"
              id="top_text"
              name="top_text"
              value={topText}
              onChange={(e) => onChangeTop(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="bottom_text">Bottom Text</label>
            <input
              className="form-control"
              type="text"
              name="bottom_text"
              id="bottom_text"
              value={bottomText}
              onChange={(e) => onChangeBottom(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="ColorInput" className="form-label">
              Color picker
            </label>
            <input
              type="color"
              className="form-control form-control-color"
              id="exampleColorInput"
              value={selectedColor}
              onChange={(e) => colorChange(e.target.value)}
              title="Choose your color"
            />
          </div>
          <div>
            <label htmlFor="FontInput" className="form-label">
              Choose a font
            </label>
            <FontPicker
              apiKey="AIzaSyAo9NRLxexTahY-O8I8GWicDHBZL_Tbnhw"
              activeFontFamily={activeFontFamily}
              onChange={handleFontChange}
              className="form-control form-control-color"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
