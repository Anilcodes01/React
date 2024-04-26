import { Suspense, useState,  } from "react";
import React from "react";

import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const Dashboard = React.lazy(() => import('./components/Dashboard'))
const Landing = React.lazy(() => import('./components/Landing'))


function App() {
  const [count, setCount] = useState(0);
return (
  <div>
      <BrowserRouter>
      <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={'loading...'}><Dashboard /></Suspense>} />
          <Route path="/" element={<Suspense fallback={'loading...'}><Landing /></Suspense>} />
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
