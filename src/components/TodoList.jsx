import React from "react";

export const TodoList = ({ todos, setTodos, listIsDone }) => {
  return (
    <>
      <div>
        <h2>{listIsDone ? "완료목록" : "할 일 목록"}</h2>
        {todos
          .filter((todo) => todo.isDone === listIsDone)
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
    </>
  );
};
