import { useRecoilState } from "recoil";
import { todoListState } from "../atoms/atoms";


const TodoItem = ({item}) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
    setTodoList(newList);
  };

  const ToggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };
  
  const textDecoration = item.isComplete ? 'line-through' : 'none';

  return (
    <div className="ml-10 flex gap-5">
        <input className="cursor-pointer mb-5"
        type="checkbox"
        checked={item.isComplete}
        onChange={ToggleItemCompletion}
      
      />
      <input className="mb-5" type="text" value={item.text} onChange={editItemText}   style={{textDecoration: textDecoration}} />
      
      <button className="bg-slate-500 rounded w-10 mb-5" onClick={deleteItem}>X</button>
    </div>
  );

  function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }

  function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }
};

export default TodoItem;
