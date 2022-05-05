import React, { Fragment, useState } from "react";
import axios from "axios";
import Message from "./Message";
import Progress from "./Progress";

const FileUpload = (props) => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  // const [uploadedFile, setUploadedFile] = useState({});
  // const [message, setMessage] = useState("");
  // const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  // async function uploadFile() {
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   try {
  //     const res = await axios.post("/upload", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //       onUploadProgress: (progressEvent) => {
  //         setUploadPercentage(
  //           parseInt(
  //             Math.round((progressEvent.loaded * 100) / progressEvent.total)
  //           )
  //         );
  //       },
  //     });

  //     setTimeout(() => setUploadPercentage(0), 1200);

  //     const { fileName, filePath } = res.data;

  //     setUploadedFile({ fileName, filePath });

  //     setMessage("File Uploaded");
  //   } catch (err) {
  //     if (err.response.status === 500) {
  //       setMessage("There was a problem with the server");
  //     } else {
  //       setMessage(err.response.data.msg);
  //     }
  //     setUploadPercentage(0);
  //   }
  // }

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    props.uploadFile(formData);

    setFile(null);
    e.target.reset();
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className="input-group mb-3">
          <input
            type="file"
            className="form-control border border-primary bg-transparent text-white"
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
    </Fragment>
  );
};

export default FileUpload;
