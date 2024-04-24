const { useState, useEffect } = require("react");

function useTodos() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get().then(function(res) {
      setTodos(res.data.todos)
    })
  })
}

function App() {
  const todos = useTodos();


  return <div>
    {todos}
  </div>
}

export default App;