import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./index.css";

import PracticePage from "./pages/PracticePage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="topbar"></header>

        <main className="layout">
          {/* Default route (fallback user) */}
          <Routes>
            <Route path="/" element={<PracticePage />} />

            {/* User-specific interview */}
            <Route path="/practice/:userId" element={<PracticePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

