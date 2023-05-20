import { useReducer, useEffect } from "react";
import { todoReducer } from "../components/todoReducer";

const StorageUser = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], StorageUser);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: id,
    };

    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: id,
    };

    dispatch(action);
  };

  const todosCount = () => {
    return todos.length;
  };

  const pendingTodosCount = () => {
    return todos.filter((todo) => !todo.done).length;
  };

  return {
    todos,
    todosCount: todosCount(),
    pendingTodosCount: pendingTodosCount(),
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
