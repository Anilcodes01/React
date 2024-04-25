import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Dashboard } from "./components/Dashboard";
import { Landing } from "./components/Landing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div style={{ background: "yellow" }}>
        <button
          onClick={() => {
            window.location.href = "/dashboard";
          }}
        >
          Dashboard
        </button>
        <button
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Landing
        </button>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
