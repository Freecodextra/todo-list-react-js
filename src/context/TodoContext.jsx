import React, { createContext } from "react";
import useLocalStorage from "../customHooks/useLocalStorage";
const todo = [{id: 0, task: "Write Code"},{id: 1, task: "Cook Food"},{id: 2, task: "Buy Snacks"},{id: 3, task: "Sleep"},{id: 4, task: "WRead a Book"}];
const completedTodo = [{id: 5, task: "Call a Friend"}, {id: 6, task: "Watch Movie"}];
export const TodoContext = createContext();
export const CompletedTodoContext = createContext();
export const UpdateTodoContext = createContext();

function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorage("todos", todo);
  const [completedTodos, setCompletedTodos] = useLocalStorage(
    "completedTodos",
    completedTodo
  );

  function handleUpdate1(value) {
    const arr1 = todos.map(todo => todo.id);
    const arr2 = completedTodos.map(completedTodo => completedTodo.id);
    let id;
    if(todos.length > 0 || completedTodos.length > 0) {
      id = Math.max(...arr1,...arr2);
    }else {
      id = -1;
    }
    setTodos((prev) => [...prev, { id: id+1, task: value }]);
  }
  function handleUpdate2(value) {
    setCompletedTodos((prev) => [...prev, value]);
  }
  
  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      <UpdateTodoContext.Provider value={handleUpdate1}>
        <CompletedTodoContext.Provider
          value={{ completedTodos, setCompletedTodos, handleUpdate2 }}
        >
          {children}
        </CompletedTodoContext.Provider>
      </UpdateTodoContext.Provider>
    </TodoContext.Provider>
  );
}

export default TodoProvider;
