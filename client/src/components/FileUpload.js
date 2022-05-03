import React, { Fragment, useState } from "react";
import axios from "axios";
import Message from "./Message";

const FileUpload = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  // async function uploadFile(formData) {
  //   try {
  //     const res = await axios.post("/upload", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });

  //     const { fileName, filePath } = res.data;
  //     console.log("dat", res.data);

  //     setUploadedFile({ fileName, filePath });
  //   } catch (err) {
  //     if (err.response.status === 500) {
  //       setMessage("There was a problem with the server");
  //     } else {
  //       setMessage(err.response.data.msg);
  //     }
  //   }
  // }

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   uploadFile(formData);

  //   setFile(null);
  //   e.target.reset();
  // };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Clear percentage

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage("File Uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  return (
    <Fragment>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <input
            type="file"
            className="form-control"
            id="inputGroupFile04"
            aria-describedby="inputGroupFileAddon04"
            aria-label="Upload"
            onChange={onChange}
          />
          <button
            className="btn btn-primary"
            type="submit"
            value="Upload"
            id="inputGroupFileAddon04"
          >
            Upload
          </button>
        </div>
      </form>
      {uploadedFile && (
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <h3>{uploadedFile.fileName}</h3>
            <img style={{ width: "100%" }} src={uploadedFile.filePath} alt="" />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default FileUpload;
