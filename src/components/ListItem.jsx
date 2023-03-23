import { useState } from "react";
import useInput from "../hooks/useInput";
import { updateTodoAxios } from "../api/todo";

export default function ListItem({ todo, id, isCompleted, getTodo }) {
  const [editable, setEditable] = useState(false);
  const handleEdit = () => {
    setEditable(!editable);
  };
  const [editedText] = useInput(todo);
  console.log(editedText);
  const [completion, setCompletion] = useState(isCompleted);

  const updateTodo = async () => {
    const res = await updateTodoAxios(id, {
      todo: editedText.value,
      isCompleted: completion,
    });
    setEditable(!editable);
    console.log(res.data);
    getTodo();
  };
  return (
    <>
      {editable ? (
        <li id={id}>
          <label>
            <input type="checkbox" />
            <input value={editedText.value} onChange={editedText.onchange} />
          </label>
          <button type="button" onClick={handleEdit}>
            수정
          </button>
          <button type="button" onClick={updateTodo}>
            수정완료
          </button>
        </li>
      ) : (
        <li id={id}>
          <label>
            <input type="checkbox" />
            <span>{todo}</span>
          </label>
          <button type="button" onClick={handleEdit}>
            수정
          </button>
          <button type="button" onClick={updateTodo}>
            수정완료
          </button>
        </li>
      )}
    </>
  );
}
