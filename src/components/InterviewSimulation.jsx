import { useState } from "react";
import QuestionCard from "./QuestionCard";
import ActionButtons from "./ActionButtons";
import LevelInfo from "./LevelInfo";

const InterviewSimulation = () => {
  const TOTAL_QUESTIONS = 10;

  const [current, setCurrent] = useState(1);
  const [history, setHistory] = useState([]);

  // Interview finished
  if (current > TOTAL_QUESTIONS) {
    const solvedCount = history.filter(h => h === "solved").length;
    const failedCount = history.filter(h => h === "failed").length;

    return (
      <div style={{ textAlign: "center" }}>
        <h1>Interview Completed</h1>
        <p>Total Questions: {TOTAL_QUESTIONS}</p>
        <p>Solved: {solvedCount}</p>
        <p>Failed: {failedCount}</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1>Interview Mode</h1>
      <p>
        Question {current} / {TOTAL_QUESTIONS}
      </p>

      <QuestionCard />

      <ActionButtons
        onSolved={() => {
          setHistory([...history, "solved"]);
          setCurrent(current + 1);
        }}
        onFailed={() => {
          setHistory([...history, "failed"]);
          setCurrent(current + 1);
        }}
      />

      <LevelInfo />
    </div>
  );
};

export default InterviewSimulation;
