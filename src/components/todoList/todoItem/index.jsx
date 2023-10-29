// import { createElement } from "react";
import "./styles.css";

export const TodoItem = (props) => {
  return (
    <li>
      <div>
        <span>{`${props.index}. `}</span>
        <span>{props.title}</span>
      </div>
      <button>X</button>
    </li>
  );
  // return createElement(
  //   "div",
  //   {},
  //   createElement("span", {}, "1. "),
  //   createElement("span", {}, "Todo Item")
  // );
};
