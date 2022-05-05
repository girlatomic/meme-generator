import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import FileUpload from "./components/FileUpload";
import NavBar from "./components/NavBar";
import EditForm from "./components/EditForm";
import Meme from "./components/Meme";
import Progress from "./components/Progress";
import Message from "./components/Message";

const App = () => {
  const [uploadedFile, setUploadedFile] = useState({});
  const [topText, setTopText] = useState("Top Text");
  const [bottomText, setBottomText] = useState("Bottom Text");
  const [selectedColor, setSelectedColor] = useState("#FBFF0A");
  const [activeFontFamily, setActiveFontFamily] = useState("Oswald");
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);

  function onChangeTop(newValue) {
    setTopText(newValue);
  }

  function onChangeBottom(newValue) {
    setBottomText(newValue);
  }

  function colorChange(newValue) {
    setSelectedColor(newValue);
  }

  function handleFontChange(nextFont) {
    setActiveFontFamily(nextFont.family);
  }

  async function uploadFile(formData) {
    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        },
      });
      setTimeout(() => setUploadPercentage(0), 1200);

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage("File Uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
      setUploadPercentage(0);
    }
  }
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="container-fluid mt-4">
        <div className="row g-5">
          <div className="col-md">
            <div className="container">
              <h2>Preview </h2>
              <Meme
                uploadedFile={uploadedFile}
                topText={topText}
                bottomText={bottomText}
                selectedColor={selectedColor}
              />
            </div>
          </div>
          <div className="sidebar col-md">
            <div className="container">
              <h2>Step 1: Upload your image </h2>
              {message ? <Message msg={message} /> : null}
              <FileUpload uploadFile={(fd) => uploadFile(fd)} />
              <Progress percentage={uploadPercentage} />
              <h2>Step 2: Edit your image </h2>
              <EditForm
                onChangeTop={(nv) => onChangeTop(nv)}
                topText={topText}
                bottomText={bottomText}
                selectedColor={selectedColor}
                onChangeBottom={(nv) => onChangeBottom(nv)}
                colorChange={(nv) => colorChange(nv)}
                handleFontChange={(nv) => handleFontChange(nv)}
                activeFontFamily={activeFontFamily}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
