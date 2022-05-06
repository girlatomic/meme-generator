import React from "react";
import PropTypes from "prop-types";

const Progress = ({ percentage }) => {
  return (
    <div className="progress mb-3 bg-transparent" style={{ height: "10px" }}>
      <div
        className="progress-bar progress-bar-striped"
        role="progressbar"
        style={{ width: `${percentage}%` }}
      >
        {percentage}%
      </div>
    </div>
  );
};

Progress.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default Progress;
