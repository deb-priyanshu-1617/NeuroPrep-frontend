import React from "react";
import "./App.css"; 
import "./index.css"; 
import PracticePage from "./pages/PracticePage";

function App() {
  return (
    <div className="app">
         <header className="topbar">
            <div>
               <h1>Adaptive DSA Practice</h1>
               <p>Questions adapt based on your performance</p>
            </div>
         </header>
          <main className="layout">
            <PracticePage />
          </main>
    </div>
  );
}

export default App;




