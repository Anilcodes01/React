import { useEffect, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

// function App() {
//   const [number, setNumber] = useState(1);

//   return (
//     <>
//       <button
//         onClick={() => {
//           setNumber(1);
//         }}
//       >
//         1
//       </button>
//       <button
//         onClick={() => {
//           setNumber(2);
//         }}
//       >
//         2
//       </button>
//       <button
//         onClick={() => {
//           setNumber(3);
//         }}
//       >
//         3
//       </button>
//       <button
//         onClick={() => {
//           setNumber(4);
//         }}
//       >
//         4
//       </button>
//       <Todo id={number} />
//     </>
//   );
// }

// function Todo({ id }) {
//   const [todo, setTodo] = useState({});

//   useEffect(() => {
//     axios
//       .get(`https://sum-server.100xdevs.com/todo?id=${id}`)
//       .then(function (res) {
//         setTodo(res.data.todo);
//       });
//   }, [id]);

//   return (
//     <div>
//       <h3>id={id}</h3>
//       <h3>{todo.title}</h3>
//       <h3>{todo.description}</h3>
//     </div>
//   );
// }

// export default App;

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(5);

  let sum = useMemo(() => {
    let sum = 0;
    for (let i = 1; i <= inputValue; i++) {
      sum = sum + i;
    }
    return sum;
  }, [inputValue]);

  return (
    <div>
      <input
        onChange={function (e) {
          setInputValue(e.target.value);
        }}
        placeholder={"Find sum from 1 to n"}
      ></input>
      <br />
      <br />
      Sum From 1 to {inputValue} is {sum} <br />
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        You clicked {count} times!
      </button>
    </div>
  );
}

export default App;
