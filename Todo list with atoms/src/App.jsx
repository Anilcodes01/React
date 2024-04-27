import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import "./App.css";
import { todoListState } from "./atoms/atoms";
import { useState } from "react";
import TodoItemCreator from "./functions/create";
import TodoItem from "./functions/update";

function App() {
 

  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

function TodoList() {
  const todoList = useRecoilValue(todoListState)

  return (
    <>
    <TodoItemCreator />
    {todoList.map((todoItem) => (<TodoItem key={todoItem.id} item={todoItem} />))}
    
    </>
  )
}

export default App;
