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
          <div className="input-field mt-3">
            <label className="mb-2" htmlFor="top_text">
              Enter your text
            </label>
            <input
              className="form-control border border-primary bg-transparent text-white-50 mb-2"
              type="text"
              id="top_text"
              name="top_text"
              value={topText}
              onChange={(e) => onChangeTop(e.target.value)}
            />
          </div>
          <div className="input-field mb-3">
            <input
              className="form-control border border-primary bg-transparent text-white-50"
              type="text"
              name="bottom_text"
              id="bottom_text"
              value={bottomText}
              onChange={(e) => onChangeBottom(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="ColorInput" className="form-label">
              Choose a color
            </label>
            <input
              type="color"
              className="form-control form-control-color border border-primary bg-transparent mb-3"
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
            />
          </div>
        </div>
      </form>
    </div>
  );
}
