import { useState, useEffect } from "react";
import { getNextQuestion, submitResult } from "../api/questionApi.js";

const useQuestionFlow = (userId) => {
  if (!userId) {
    console.warn("⚠️ userId missing!");
  }

  const [question, setQuestion] = useState(null);
  const [levelChange, setLevelChange] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNextQuestion = async () => {
    console.log("Fetching question for userId:", userId);
    try {
      setLoading(true);
      setError(null);

      const data = await getNextQuestion(userId || 242);
      console.log("API RAW DATA:", data);

      // ✅ FIXED: your backend gives data.data (not data.data.data)
      const nextQ = data?.data || data?.nextQuestion || null;
      const level = data?.levelChange || null;

      console.log("nextQ computed:", nextQ);

      setQuestion(nextQ);
      setLevelChange(level);
    } catch (err) {
      setError("Failed to fetch next question");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const submitAnswer = async (result = "solved") => {
    try {
      setLoading(true);
      setError(null);

      const data = await submitResult(userId, result);
      console.log("Submit response:", data);

      // ✅ FIXED same here
      const nextQ = data?.data || data?.nextQuestion || null;
      const level = data?.levelChange || null;

      setQuestion(nextQ);
      setLevelChange(level);
    } catch (err) {
      setError("Failed to submit answer");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNextQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return {
    question,
    levelChange,
    loading,
    error,
    submitAnswer,
  };
};

export default useQuestionFlow;
