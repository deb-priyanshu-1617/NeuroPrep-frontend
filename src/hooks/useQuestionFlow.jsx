import { useState, useEffect } from "react";
import { getNextQuestion, submitResult } from "../api/questionApi.js";

const TOTAL_QUESTIONS = 10;

const useQuestionFlow = (userId) => {
  const [question, setQuestion] = useState(null);
  const [levelChange, setLevelChange] = useState(null);
  const [message, setMessage] = useState(null);
  const [suggestion, setSuggestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [current, setCurrent] = useState(1);
  const [solvedCount, setSolvedCount] = useState(0);
  const [failedCount, setFailedCount] = useState(0);

  const fetchNextQuestion = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await getNextQuestion(userId);
      const payload = res?.data;

      if (payload?.message) {
        setQuestion(null);
        setMessage(payload.message);
        setSuggestion(payload.suggestion);
        return;
      }

      setQuestion(payload);
      setLevelChange(res.levelChange || null);
    } catch (err) {
      setError("Failed to fetch question");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const submitAnswer = async (result) => {
    try {
      setLoading(true);
      setError(null);

      // ✅ update counts FIRST
      if (result === "solved") {
        setSolvedCount((c) => c + 1);
      } else {
        setFailedCount((c) => c + 1);
      }

      const res = await submitResult(userId, result);
      const payload = res?.data;

      setCurrent((c) => c + 1);

      // ✅ Interview complete by count
      if (current >= TOTAL_QUESTIONS) {
        setQuestion(null);
        setMessage("Interview completed successfully.");
        setSuggestion("Review your performance below.");
        return;
      }

      // ✅ Backend exhaustion
      if (payload?.message) {
        setQuestion(null);
        setMessage(payload.message);
        setSuggestion(payload.suggestion);
        return;
      }

      setQuestion(payload);
      setLevelChange(res.levelChange || null);
    } catch (err) {
      setError("Failed to submit answer");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNextQuestion();
  }, [userId]);

  return {
    question,
    levelChange,
    message,
    suggestion,
    loading,
    error,
    current,
    solvedCount,
    failedCount,
    submitAnswer,
  };
};

export default useQuestionFlow;
