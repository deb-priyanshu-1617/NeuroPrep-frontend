import React from "react";
import ProgressBar from "./ProgressBar";

const InterviewSimulation = ({ current, total, completed }) => {
  return (
    <div className="interview-header">
      <h1>Adaptive DSA Practice</h1>
      <p className="muted">
        Questions adapt based on your performance
      </p>

      {!completed && (
        <ProgressBar current={current} total={total} />
      )}

      {completed && <p>Interview Completed</p>}
    </div>
  );
};

export default InterviewSimulation;
