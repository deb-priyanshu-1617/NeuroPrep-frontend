import React from "react";

const LevelInfo = ({ levelChange }) => {
  if (!levelChange) return null;

  const { oldLevel, newLevel } = levelChange;

  let message = "Level unchanged";
  let color = "#999";
  let icon = "⏸";

  if (newLevel > oldLevel) {
    message = "⬆ Level Up";
    color = "#4caf50"; // green
    icon = "🚀";
  } else if (newLevel < oldLevel) {
    message = "⬇ Level Down";
    color = "#ff5252"; // red
    icon = "⚠️";
  }

  return (
    <div style={{ ...styles.container, borderColor: color }}>
      <h3 style={{ ...styles.title, color }}>
        {icon} {message}
      </h3>
      <p>
        <strong>Previous Level:</strong> {oldLevel}
      </p>
      <p>
        <strong>Current Level:</strong> {newLevel}
      </p>
    </div>
  );
};

const styles = {
  container: {
    border: "2px solid",
    borderRadius: "12px",
    padding: "16px 20px",
    marginBottom: "16px",
    backgroundColor: "#1e1e2f", // dark background
    color: "#f5f5f5",           // light text
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
  },
  title: {
    marginBottom: "10px",
    fontWeight: "600",
  },
};

export default LevelInfo;
