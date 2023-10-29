import { TodoItem } from "./todoItem";
import "./styles.css";

export const TodoList = (props) => {
  const { todos } = props;

  return (
    <ul>
      {todos.map((item, index) => (
        <>
          <TodoItem key={index} index={index + 1} title={item.title} />
        </>
      ))}
    </ul>
  );
};
