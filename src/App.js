import { TodoList } from "./components/todoList";

function App() {
  const todos = [
    { index: 1, title: "Прибрати кімнату" },
    { index: 2, title: "Вигуляти собаку" },
    { index: 3, title: "Зробити домашку" },
    { index: 4, title: "Сходити в магазин по продукти" },
    { index: 5, title: "Поїсти" },
  ];

  return (
    <div>
      <TodoList todos={todos} />
      <button>Add Todo</button>
    </div>
  );
}

// 1. сворити React компоненту з назвою Student
// 2. Student приймає 3 проперті - studentName, studentAge, studentHobby
// 3. відрендерити  компоненту Student
// export const Student = ....
// ----
// <Student ...

export default App;
