import React from "react";
import ActionButtons from "../components/ActionButtons";
import LevelInfo from "../components/LevelInfo";
import QuestionCard from "../components/QuestionCard";
import useQuestionFlow from "../hooks/useQuestionFlow";

const PracticePage = () => {
  const { question, levelChange, loading, error, submitAnswer } = useQuestionFlow(242);

  if (loading) return <div className="card"><p>Loading...</p></div>;
  if (error) return <div className="card"><p className="muted">{error}</p></div>;

  return (
    <>
      {question ? (
        <>
          {/* <header><InterviewSimulation /></header> */}
          <section className="col card">
            <QuestionCard question={question} />
            <ActionButtons
              onSolved={() => submitAnswer("solved")}
              onFailed={() => submitAnswer("fail")}
            />
          </section>

          <aside className="side card">
            <LevelInfo levelChange={levelChange} />
          </aside>
        </>
      ) : (
        <div className="card"><p className="muted">No question available</p></div>
      )}
    </>
  );
};

export default PracticePage;