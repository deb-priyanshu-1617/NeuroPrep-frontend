
// API BASE URL (DEPLOYED BACKEND)

const BASE_URL = "https://neuraprep.onrender.com/api";

/* 
   GET NEXT QUESTION*/
export const getNextQuestion = async (userId = 242) => {
  try {
    const res = await fetch(`${BASE_URL}/next-question/${userId}`);

    if (!res.ok) {
      throw new Error("Failed to fetch next question");
    }

    const data = await res.json();
    console.log("getNextQuestion response:", data);
    return data;
  } catch (err) {
    console.error("Error in getNextQuestion:", err);
    return null;
  }
};

/* 
   SUBMIT RESULT (solved / fail)
 */
export const submitResult = async (userId, result) => {
  try {
    const res = await fetch(`${BASE_URL}/submitResult`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, result }),
    });

    if (!res.ok) {
      throw new Error("Failed to submit result");
    }

    const data = await res.json();
    console.log("submitResult response:", data);
    return data;
  } catch (err) {
    console.error("Error in submitResult:", err);
    return null;
  }
};

/* 
   RESET INTERVIEW SESSION
 */
export const resetInterviewSession = async (userId) => {
  try {
    const res = await fetch(`${BASE_URL}/reset-session/${userId}`, {
      method: "POST",
    });

    if (!res.ok) {
      throw new Error("Failed to reset session");
    }

    const data = await res.json();
    console.log("resetInterviewSession response:", data);
    return data;
  } catch (err) {
    console.error("Error in resetInterviewSession:", err);
    return null;
  }
};
