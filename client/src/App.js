import React from "react";
import "./App.css";
import FileUpload from "./components/FileUpload";
import NavBar from "./components/NavBar";

const App = () => (
  <div>
    <div>
      <NavBar />
    </div>
    <div className="container mt-4">
      <FileUpload />
    </div>
  </div>
);

export default App;
