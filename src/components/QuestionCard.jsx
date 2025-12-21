import React from "react";

const QuestionCard = ({ question }) => {
  if (!question) return <p>No question data available</p>;

  const {
    id,
    topic,
    difficulty,
    questions,
    expectedConcepts,
    expectedTime,
    companies,
    reason,
  } = question;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "16px 0",
        backgroundColor: "#150d29ff",
      }}
    >
      <h2 style={{ marginBottom: "8px" }}>
        {id}: {topic}
      </h2>

      <p>
        <strong>Difficulty:</strong> {difficulty}
      </p>

      <p style={{ marginTop: "12px" }}>
        <strong>Question:</strong> {questions}
      </p>

      {expectedConcepts?.length > 0 && (
        <p>
          <strong>Expected Concepts:</strong> {expectedConcepts.join(", ")}
        </p>
      )}

      {companies?.length > 0 && (
        <p>
          <strong>Asked In:</strong> {companies.join(", ")}
        </p>
      )}

      {expectedTime && (
        <p>
          <strong>Expected Time:</strong> {expectedTime} min
        </p>
      )}

      {reason && (
        <p style={{ fontStyle: "italic", color: "#555" }}>
          Reason: {reason}
        </p>
      )}
    </div>
  );
};

export default QuestionCard;
