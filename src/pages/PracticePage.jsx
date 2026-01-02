import React from "react";
import ActionButtons from "../components/ActionButtons";
import LevelInfo from "../components/LevelInfo";
import QuestionCard from "../components/QuestionCard";
import useQuestionFlow from "../hooks/useQuestionFlow";
import InterviewSimulation from "../components/InterviewSimulation";

const PracticePage = () => {
  const { question, levelChange, loading, error, submitAnswer } =
    useQuestionFlow(242);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <InterviewSimulation
        current={question?.id ?? 0}
        total={10}
        completed={!question}
      />

      {question && (
        <>
          <section className="card">
            <QuestionCard question={question} />

            <ActionButtons
              onSolved={() => submitAnswer("solved")}
              onFailed={() => submitAnswer("failed")}
            />
          </section>

          <aside className="card">
            <LevelInfo levelChange={levelChange} />
          </aside>
        </>
      )}
    </>
  );
};

export default PracticePage;
