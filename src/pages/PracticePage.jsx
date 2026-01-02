import React from "react";
import { useParams } from "react-router-dom";

import InterviewSimulation from "../components/InterviewSimulation";
import QuestionCard from "../components/QuestionCard";
import ActionButtons from "../components/ActionButtons";
import LevelInfo from "../components/LevelInfo";
import Timer from "../components/Timer";
import Scratchpad from "../components/Scratchpad";
import InterviewSummary from "./InterviewSummary";

import useQuestionFlow from "../hooks/useQuestionFlow";
import interviewConfig from "../config/interviewConfig";

const PracticePage = () => {
  const { userId } = useParams();
  const resolvedUserId =
    Number(userId) || interviewConfig.fallbackUserId;

  const {
    question,
    levelChange,
    message,
    loading,
    error,
    current,          // SERIAL COUNT (1,2,3…)
    solvedCount,
    failedCount,
    submitAnswer,
  } = useQuestionFlow(resolvedUserId);

  const TOTAL_QUESTIONS = interviewConfig.totalQuestions;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  /* ===============================
     INTERVIEW COMPLETED
     =============================== */
  if (!question && message) {
    // 🔥 Dynamic recommendation (NOT hard-coded)
    const recommendation =
      failedCount > solvedCount
        ? "You struggled more than expected. Revise your weakest topic and retry the interview."
        : "Good performance! Try a higher difficulty level next.";

    return (
      <InterviewSummary
        total={solvedCount + failedCount}
        solved={solvedCount}
        failed={failedCount}
        finalLevel={levelChange?.newLevel || "easy"}
        recommendation={recommendation}
        userId={resolvedUserId}
      />
    );
  }

  /* ===============================
     ACTIVE INTERVIEW
     =============================== */
  return (
    <div className="page">
      {/* SERIAL question number (NOT question.id) */}
      <InterviewSimulation
        current={current}
        total={TOTAL_QUESTIONS}
        completed={false}
      />

      <div className="card">
        <Timer
          minutes={
            question.expectedTime ||
            interviewConfig.defaultTimePerQuestion
          }
          onTimeout={() => submitAnswer("fail")}
        />

        <QuestionCard question={question} />

        {/* Scratchpad clears automatically on new question */}
        <Scratchpad key={question.id} />

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
