import React from "react";

const InterviewSimulation = ({ current, total, completed }) => {
  return (
    <div className="interview-header">
      <h1>Adaptive DSA Practice</h1>
      <p className="muted">Questions adapt based on your performance</p>

      {!completed ? (
        <p>
          Interview Mode — Question {current} / {total}
        </p>
      ) : (
        <p>Interview Completed</p>
      )}
    </div>
  );
};

export default InterviewSimulation;
