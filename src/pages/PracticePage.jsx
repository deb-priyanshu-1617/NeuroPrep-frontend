import React from "react";
import InterviewSimulation from "../components/InterviewSimulation";
import QuestionCard from "../components/QuestionCard";
import ActionButtons from "../components/ActionButtons";
import LevelInfo from "../components/LevelInfo";
import Timer from "../components/Timer";
import useQuestionFlow from "../hooks/useQuestionFlow";
import InterviewSummary from "./InterviewSummary";

const TOTAL_QUESTIONS = 10;

const PracticePage = () => {
  const {
    question,
    levelChange,
    message,
    loading,
    error,
    current,
    solvedCount,
    failedCount,
    submitAnswer,
  } = useQuestionFlow(242);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  /* ===============================
     INTERVIEW COMPLETED
     =============================== */
  if (!question && message) {
    return (
      <InterviewSummary
        total={solvedCount + failedCount}
        solved={solvedCount}
        failed={failedCount}
        finalLevel={levelChange?.newLevel || "easy"}
        weakestTopic="Recursion"
        userId={242}
      />
    );
  }

  /* ===============================
     ACTIVE INTERVIEW
     =============================== */
  return (
    <div className="page">
      <InterviewSimulation
        current={current}
        total={TOTAL_QUESTIONS}
        completed={false}
      />

      <div className="card">
        <Timer
          minutes={question.expectedTime || 10}
          onTimeout={() => submitAnswer("fail")}
        />

        <QuestionCard question={question} />

        <ActionButtons
          onSolved={() => submitAnswer("solved")}
          onFailed={() => submitAnswer("fail")}
        />
      </div>

      <LevelInfo levelChange={levelChange} />
    </div>
  );
};

export default PracticePage;
