import { useState,  } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import  Dashboard  from "./components/Dashboard";
import  Landing  from "./components/Landing";


function App() {
  const [count, setCount] = useState(0);
return (
  <div>
      <BrowserRouter>
      <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();

  
function DashboardPage() {
  navigate('/dashboard')
}

function LandingPage() {
  navigate('/')
}
 
  return (
    <div>
      <div style={{ background: "yellow", display: 'flex', alignItems:'center', gap: '30px',  height: '40px'}}>
        <button style={{height: '30px', width: '100px', borderRadius: '20px' , cursor: 'pointer'}}
          onClick={DashboardPage}
        >
          Dashboard
        </button>
        <button style={ { height: '30px', width: '100px', borderRadius: '20px' , cursor: 'pointer', outline: 'none'}}
          onClick={LandingPage}
        >
          Landing
        </button>
      </div>
      </div>
  )
}

export default App;
