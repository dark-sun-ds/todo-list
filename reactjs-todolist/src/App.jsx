import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([
    "Learn React",
    "Learn Vite",
    "Learn JavaScript",
    "Learn HTML",
    "Learn CSS",
    "Learn Sass",
  ]);
  
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, i) => i!==index);
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    
    let localTodos = localStorage.getItem('todos');
    if (localTodos) {
      setTodos(JSON.parse(localTodos).todos);
    }
    else {
      return
    }

  }, [])

  return (
    <>
      <>
        <TodoInput
          todoValue={todoValue}
          setTodoValue={setTodoValue}
          handleAddTodo={handleAddTodo}
        />
        <TodoList
          handleEditTodo={handleEditTodo}
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
        />
      </>
    </>
  );
}

export default App;
