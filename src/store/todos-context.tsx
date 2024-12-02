import React, { useState } from "react";
import Todo from "../models/todo";

// Using React Context with TypeScript
type Todos = {
  items: Todo[];
  addTodo: (todoText: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodosContext = React.createContext<Todos>({
  items: [],
  addTodo: () => {},
  deleteTodo: () => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const deleteTodoHandler = (selectedID: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== selectedID);
    });
  };

  const contextValue = {
    items: todos,
    addTodo: addTodoHandler,
    deleteTodo: deleteTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
