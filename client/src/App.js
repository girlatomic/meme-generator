import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import FileUpload from "./components/FileUpload";
import NavBar from "./components/NavBar";
import EditForm from "./components/EditForm";
import Meme from "./components/Meme";

const App = () => {
  // const [file, setFile] = useState("");
  const [uploadedFile, setUploadedFile] = useState({});

  const [topTextN, setTopTextN] = useState("Top Text");
  const [bottomText, setBottomText] = useState("Bottom Text");
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");

  function onChangeTxt(newValue) {
    setTopTextN(newValue);
  }

  function onChangeBottom(newValue) {
    setBottomText(newValue);
  }

  function colorChange(newValue) {
    setSelectedColor(newValue);
  }

  async function uploadFile(formData) {
    // const formData = new FormData();
    // formData.append("file", file);
    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      console.log("File Uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was a problem with the server");
      } else {
        console.log(err.response.data.msg);
      }
    }
  }
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="container mt-4">
        <div className="row g-5">
          <div className="col-md">
            <h2>Preview </h2>
            <Meme
              uploadedFile={uploadedFile}
              topTextN={topTextN}
              bottomText={bottomText}
              selectedColor={selectedColor}
            />
          </div>
          <div className="col-md">
            <h2>Step 1: Upload your image </h2>
            <FileUpload uploadFile={(fd) => uploadFile(fd)} />
            <h2>Step 2: Edit your image </h2>
            <EditForm
              onChangeTxt={(nv) => onChangeTxt(nv)}
              topTextN={topTextN}
              bottomText={bottomText}
              selectedColor={selectedColor}
              onChangeBottom={(nv) => onChangeBottom(nv)}
              colorChange={(nv) => colorChange(nv)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
