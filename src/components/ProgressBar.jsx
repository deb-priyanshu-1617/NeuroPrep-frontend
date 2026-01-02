import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ current, total }) => {
  const percent = Math.round((current / total) * 100);

  return (
    <div className="progress-container">
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="progress-text">
        Question {current} / {total}
      </span>
    </div>
  );
};

export default ProgressBar;
