import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  

  return (
    <div>
      <HeaderWithButton />
      <Header title={"Learning React!"} />
      <Header title={"Learning React!"} />
      <Header title={"Learning React!"} />
      <Header title={"Learning React!"} />
    </div>
  );
}

function HeaderWithButton() {
  const [title, setTitle] = useState("My name is Anil");

  function updateTitle() {
    setTitle("My name is " + Math.random());

    
  }

  return <div>
    <button onClick={updateTitle}>Click me to change the title</button>
      <br />
      <br />
      <Header title={title} />
      <br />
      <br />
  </div>
}

function Header({ title }) {
  return <div>{title}</div>;
}

export default App;
