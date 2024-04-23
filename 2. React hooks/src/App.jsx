import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { memo } from "react";

let counter = 4;

function App() {
  return (
    <div>
      <CardWrapper>
        Hi there!
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
          laudantium ducimus quod velit exercitationem vel sit, laborum, cumque
          alias tempore modi! Totam deleniti fugiat ratione, repudiandae aperiam
          neque dolorum dicta!
        </p>
      </CardWrapper>

      <br />
      <CardWrapper>
        Start following your friends on Erdős to view their activity feed on the
        homepage.
      </CardWrapper>
      <br />
      <CardWrapper>
        Progress
        <p>It's the job that's never started as takes longest to finish</p>
      </CardWrapper>
    </div>
  );
}

function CardWrapper({ children }) {
  return (
    <div
      style={{
        border: "2px solid white",
        width: "300px",
        padding: "10px",
      }}
    >
      {children}
    </div>
  );
}

export default App;
