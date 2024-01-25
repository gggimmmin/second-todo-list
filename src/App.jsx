import React, { useState } from "react";
import uuid from "react-uuid";
import { Input } from "./components/Input";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      title: "제목1",
      content: "내용1",
      isDone: false,
    },
    {
      id: uuid(),
      title: "제목2",
      content: "내용2",
      isDone: true,
    },
    {
      id: uuid(),
      title: "제목3",
      content: "내용3",
      isDone: false,
    },
    {
      id: uuid(),
      title: "제목4",
      content: "내용4",
      isDone: false,
    },
  ]);

  return (
    <div>
      <header
        style={{
          backgroundColor: "#f7e9c3",
          padding: "10px",
        }}
      >
        헤더입니다.
      </header>
      <main
        style={{
          backgroundColor: "#d9f7c3",
          padding: "10px",
        }}
      >
        <Input todos={todos} setTodos={setTodos} />
        <div>
          <h1>리스트 영역</h1>

          <TodoList todos={todos} setTodos={setTodos} listIsDone={false} />
          <TodoList todos={todos} setTodos={setTodos} listIsDone={true} />
        </div>
      </main>
      <footer
        style={{
          backgroundColor: "#c3e9f7",
          padding: "10px",
        }}
      >
        푸터입니다.
      </footer>
    </div>
  );
}

export default App;
