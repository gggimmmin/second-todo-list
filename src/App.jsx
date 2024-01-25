import React, { useState } from "react";
import uuid from "react-uuid";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const newTodo = {
                id: uuid(),
                title: title,
                content: content,
                isDone: false,
              };
              setTodos([...todos, newTodo]);
            }}
          >
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <input
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
            <button type="submit">입력</button>
          </form>
        </div>
        <div>
          <h1>리스트 영역</h1>

          <div>
            <h2>할 일 목록</h2>
            {todos
              .filter((todo) => todo.isDone === false)
              .map((todo) => {
                return (
                  <div
                    key={todo.id}
                    style={{
                      border: "1px solid black",
                      margin: "10px",
                      paddingLeft: "10px",
                      paddingBottom: "10px",
                    }}
                  >
                    <p>{todo.id}</p>
                    <h3>{todo.title}</h3>
                    <p>{todo.content}</p>
                    <p>완료여부 : {todo.isDone.toString()}</p>
                    <button
                      onClick={() => {
                        const newTodos = todos.map((item) => {
                          if (item.id === todo.id) {
                            return {
                              ...item,
                              isDone: !item.isDone,
                            };
                          } else {
                            return item;
                          }
                        });
                        setTodos(newTodos);
                      }}
                    >
                      완료
                    </button>
                    <button
                      onClick={() => {
                        const deletedTodos = todos.filter((item) => {
                          return item.id !== todo.id;
                        });
                        setTodos(deletedTodos);
                      }}
                    >
                      삭제
                    </button>
                  </div>
                );
              })}
          </div>
          <div>
            <h2>완료된 목록</h2>
            {todos
              .filter((todo) => todo.isDone === true)
              .map((todo) => {
                return (
                  <div
                    key={todo.id}
                    style={{
                      border: "1px solid black",
                      margin: "10px",
                      paddingLeft: "10px",
                      paddingBottom: "10px",
                    }}
                  >
                    <p>{todo.id}</p>
                    <h3>{todo.title}</h3>
                    <p>{todo.content}</p>
                    <p>완료여부 : {todo.isDone.toString()}</p>
                    <button
                      onClick={() => {
                        const newTodos = todos.map((item) => {
                          if (item.id === todo.id) {
                            return {
                              ...item,
                              isDone: !item.isDone,
                            };
                          } else {
                            return item;
                          }
                        });
                        setTodos(newTodos);
                      }}
                    >
                      완료취소
                    </button>
                    <button
                      onClick={() => {
                        const deletedTodos = todos.filter((item) => {
                          return item.id !== todo.id;
                        });
                        setTodos(deletedTodos);
                      }}
                    >
                      삭제
                    </button>
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
