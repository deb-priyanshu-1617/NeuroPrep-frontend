import React, { useState } from "react";

const Scratchpad = () => {
  const [text, setText] = useState("");

  return (
    <div style={{ marginTop: "16px" }}>
      <h4 style={{ marginBottom: "6px" }}>
        Your Approach (Scratchpad)
      </h4>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={`• Explain your approach
• Write pseudocode
• Edge cases
• Time / Space complexity`}
        rows={6}
        style={{
          width: "100%",
          background: "#0f172a",
          color: "#e5e7eb",
          border: "1px solid #334155",
          borderRadius: "8px",
          padding: "10px",
          resize: "vertical",
          fontSize: "14px",
        }}
      />
    </div>
  );
};

export default Scratchpad;
