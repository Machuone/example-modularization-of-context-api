import { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const todosContext = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const text = inputRef.current!.value;

    if (text.trim().length === 0) {
      return;
    }

    todosContext.addTodo(text);
    inputRef.current!.value = "";
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
