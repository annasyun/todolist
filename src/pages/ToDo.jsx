import React, { useEffect, useState } from "react";
import useInput from "../hooks/useInput";
import { postTodoAxios } from "../api/todo";
import TodoList from "../components/TodoList";

export default function ToDo() {
  const [todoValue] = useInput("");
  const [투두리스트, set투두리스트] = useState();
  console.log("투두값:", todoValue);
  useEffect(() => {
    // 렌더링 될 때 다른 코드들 실행 후 마지막에 실행되는 코드.
    // 의존성 배열이 있는 경우, 의존성 배열값이 변경 될 때마다 콜백함수가 실행 된다.
    console.log("주시되고 있음");
  }, [todoValue.value]);

  const 할일추가 = async () => {
    const res = await postTodoAxios({
      todo: todoValue.value,
    });
    console.log("응답:", res);
  };

  return (
    <div className="cont-list">
      <label htmlFor="inp-todo">새로운 할일</label>
      <input
        id="inp-todo"
        value={todoValue.value}
        onChange={todoValue.onchange}
        data-testid="new-todo-input"
      />
      <button onClick={할일추가} data-testid="new-todo-add-button">
        추가
      </button>
      <TodoList />
    </div>
  );
}
