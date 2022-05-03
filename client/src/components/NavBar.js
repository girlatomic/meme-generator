import React from "react";
import logo from "../images/logo.png";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="d-flex align-items-center ms-2">
            <img src={logo} alt="" className="me-3" />
            <h3>Create your meme!</h3>
          </div>
        </div>
      </nav>
    </div>
  );
}
