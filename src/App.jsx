import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "제목1",
      content: "내용1",
      isDone: false,
    },
    {
      id: 2,
      title: "제목2",
      content: "내용2",
      isDone: true,
    },
    {
      id: 3,
      title: "제목3",
      content: "내용3",
      isDone: false,
    },
    {
      id: 4,
      title: "제목4",
      content: "내용4",
      isDone: false,
    },
  ]);

  const todoList = todos.filter((todo) => {
    return todo.isDone === false;
  });
  const doneList = todos.filter((todo) => {
    return todo.isDone === true;
  });

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
        <div>
          <input />
          <input />
          <button>입력</button>
        </div>
        <div>
          <h1>리스트 영역</h1>

          <div>
            <h2>할 일 목록</h2>
            {todoList.map((todo) => {
              return (
                <div
                  key={todo.id}
                  style={{
                    border: "1px solid black",
                    margin: "10px",
                    paddingLeft: "10px",
                  }}
                >
                  <p>{todo.id}</p>
                  <h3>{todo.title}</h3>
                  <p>{todo.content}</p>
                  <p>완료여부 : {todo.isDone.toString()}</p>
                </div>
              );
            })}
          </div>
          <div>
            <h2>완료된 목록</h2>
            {doneList.map((todo) => {
              return (
                <div
                  key={todo.id}
                  style={{
                    border: "1px solid black",
                    margin: "10px",
                    paddingLeft: "10px",
                  }}
                >
                  <p>{todo.id}</p>
                  <h3>{todo.title}</h3>
                  <p>{todo.content}</p>
                  <p>완료여부 : {todo.isDone.toString()}</p>
                </div>
              );
            })}
          </div>
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
