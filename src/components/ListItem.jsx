import { useState } from "react";
import useInput from "../hooks/useInput";
import { deleteTodoAxios, updateTodoAxios } from "../api/todo";

export default function ListItem({ todo, id, isCompleted, getTodo }) {
  const [editable, setEditable] = useState(false);

  const [editedText] = useInput(todo);
  console.log(editedText);
  const [completion, setCompletion] = useState(isCompleted);

  const handleEdit = () => {
    setEditable(!editable);

    const updateTodo = async () => {
      const res = await updateTodoAxios(id, {
        todo: editedText.value,
        isCompleted: completion,
      });
      console.log(res);
      getTodo();
    };
    if (editable) {
      updateTodo();
    }
  };
  const handleDelete = async () => {
    const res = await deleteTodoAxios(id);

    console.log(res);
    getTodo();
  };

  return (
    <>
      {editable ? (
        <li id={id}>
          <label>
            <input type="checkbox" />
            <input
              value={editedText.value}
              onChange={editedText.onchange}
              data-testid="modify-input"
            />
          </label>
          <button
            type="button"
            onClick={handleEdit}
            data-testid="modify-button"
          >
            수정
          </button>
          <button
            type="button"
            onClick={handleDelete}
            data-testid="delete-button"
          >
            삭제
          </button>
        </li>
      ) : (
        <li id={id}>
          <label>
            <input type="checkbox" />
            <span>{todo}</span>
          </label>
          <button
            type="button"
            onClick={handleEdit}
            data-testid="modify-button"
          >
            수정
          </button>
          <button
            type="button"
            onClick={handleDelete}
            data-testid="delete-button"
          >
            삭제
          </button>
        </li>
      )}
    </>
  );
}
