import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { useContext } from "react";

const Todos: React.FC = () => {
  const todosContext = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosContext.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onDeleteTodo={todosContext.deleteTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
