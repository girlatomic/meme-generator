import React, { Fragment, useState } from "react";

const FileUpload = (props) => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

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
        <div className="input-group mt-4 mb-3">
          <input
            type="file"
            className="form-control border border-primary bg-transparent text-white-50"
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
