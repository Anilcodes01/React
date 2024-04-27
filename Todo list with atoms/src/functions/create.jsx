import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atoms/atoms";

function TodoItemCreator() {
    const [inputValue, setInputValue] = useState("");
    const setTodoList = useSetRecoilState(todoListState);
  
    const addItem = () => {
      setTodoList((oldTodoList) => [
        ...oldTodoList,
        {
          id: getId(),
          text: inputValue,
          isComplete: false,
        },
      ]);
      setInputValue("");
    };
 


    const onChange = ({ target: { value } }) => {
        setInputValue(value);
    }
        let id = 0;
        function getId() {
          return id++;
        }
    
    
        return (
            <div  className="flex gap-8 p-10">
              <input className="border rounded " type="text" value={inputValue} onChange={onChange} />
              <button className="bg-slate-500 rounded-lg p-1 h-8" onClick={addItem}>Add Todo</button>
            </div>
          );
        
      
  
        }
  

 
  
 
  export default TodoItemCreator