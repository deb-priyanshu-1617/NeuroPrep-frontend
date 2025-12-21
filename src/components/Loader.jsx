import React from "react";

const Loader = () => {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <p style={styles.text}>Loading...</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  spinner: {
    width: "40px",
    height: "40px",
    border: "4px solid #ccc",
    borderTop: "4px solid #4caf50",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  text: {
    marginTop: "10px",
    fontSize: "16px",
    color: "#555",
  },
};

// ✅ CSS animation (inline via global style)
const styleSheet = document.createElement("style");
styleSheet.textContent = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;
document.head.appendChild(styleSheet);

export default Loader;
