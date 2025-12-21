🚀 NeuroPrep – Adaptive Interview Simulator (Frontend)

A triggering-based interview simulation frontend built to mimic real FAANG technical interviews.
This UI consumes an adaptive backend engine that dynamically selects questions based on user performance, difficulty progression, and weak topics.

Not a practice app.
An interview simulation system.

🎯 Purpose of This Project

Most platforms show random problems.
NeuroPrep simulates how real interviewers think:

Adjusts difficulty dynamically

Targets weak topics first

Avoids repetition

Forces decision pressure

This frontend is designed to visualize that intelligence clearly and realistically.

🧠 What Makes This Frontend FAANG-Grade

✅ Interview-style flow (not list-based solving)
✅ State-driven UI (level, progress, decision feedback)
✅ Backend-agnostic architecture
✅ Ready for real users & analytics
✅ Clean separation from backend (production practice)

🖥️ Current Features

📌 Question display (topic, difficulty, expected time)

📊 Live level indicator

🔁 Adaptive next-question flow

⏳ Loading & transition states

🧠 Interview-style action buttons (Solved / Failed)

🛠️ Tech Stack

React (Vite)

JavaScript (ES6+)

CSS

Modular component architecture

📂 Project Structure
src/
├── api/
│   └── questionApi.js        # Backend communication
├── components/
│   ├── QuestionCard.jsx
│   ├── LevelInfo.jsx
│   ├── ActionButtons.jsx
│   └── Loader.jsx
├── pages/
│   └── PracticePage.jsx
├── hooks/
├── assets/
├── App.jsx
└── main.jsx

🔌 Backend Integration

This frontend consumes the NeuroPrep Backend API:

Base URL

https://neuraprep.onrender.com

Key Endpoints Used

GET /api/next-question/:userId

POST /api/submitResult

[Backend repo 👉](https://github.com/deb-priyanshu-1617/NeuroPrep-backend)

🚧 Roadmap (Planned)

🧪 Interview Simulation Mode (timed, no hints)

💻 In-browser Code Editor

📈 Performance Analytics Dashboard

🔐 Auth & User Profiles

📊 Topic-wise strength visualization

🎥 Mock interview replay mode

🧪 Local Setup
git clone <frontend-repo-url>
cd NeuroPrep-frontend
npm install
npm run dev

👨‍💻 Author

Priyanshu Maurya
Backend + Systems | DSA | Interview Engineering
NIET, India

Building systems that think like interviewers — not platforms that dump problems.

⭐ Why This Project Matters

This is not CRUD.
This is decision-driven engineering — exactly what FAANG looks for.