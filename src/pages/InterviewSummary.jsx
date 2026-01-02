import React from "react";
import { resetInterviewSession } from "../api/questionApi";

const InterviewSummary = ({
  total,
  solved,
  failed,
  finalLevel,
  recommendation,
  userId,
}) => {
  return (
    <div className="page">
      <div className="card">
        <h2>Interview Summary</h2>

        <p>
          <strong>Questions Attempted:</strong> {total}
        </p>

        <p style={{ color: "#4caf50" }}>
          <strong>Solved:</strong> {solved}
        </p>

        <p style={{ color: "#f44336" }}>
          <strong>Failed:</strong> {failed}
        </p>

        <hr />

        <p>
          <strong>Final Difficulty Level:</strong> {finalLevel}
        </p>

        <p style={{ marginTop: "12px", opacity: 0.8 }}>
          <strong>Recommendation:</strong> {recommendation}
        </p>

        <button
          style={{
            marginTop: "16px",
            padding: "10px 16px",
            background: "#4caf50",
            border: "none",
            borderRadius: "6px",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={async () => {
            await resetInterviewSession(userId);
            window.location.reload();
          }}
        >
          🔁 Restart Interview
        </button>
      </div>
    </div>
  );
};

export default InterviewSummary;
