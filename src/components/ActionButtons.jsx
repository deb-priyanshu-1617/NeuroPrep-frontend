import React from "react";

const ActionButtons = ({ onSolved, onFailed }) => {
  return (
    <div style={styles.container}>
      <button style={{ ...styles.button, ...styles.solved }} onClick={onSolved}>
        ✅ Solved
      </button>
      <button style={{ ...styles.button, ...styles.failed }} onClick={onFailed}>
        ❌ Failed
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    border: "none",
    transition: "all 0.3s ease",
  },
  solved: {
    backgroundColor: "#4caf50",
    color: "#fff",
  },
  failed: {
    backgroundColor: "#f44336",
    color: "#fff",
  },
};

export default ActionButtons;
