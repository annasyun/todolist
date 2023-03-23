import { useState } from "react";
import useInput from "../hooks/useInput";

export default function ListItem({ todo, id }) {
  const [editable, setEditable] = useState(false);
  const handleEdit = () => {
    setEditable(!editable);
  };
  const [editedText] = useInput(todo);
  console.log(editedText);

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
          <button type="button" onClick={handleEdit}>
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
          <button type="button" onClick={handleEdit}>
            수정완료
          </button>
        </li>
      )}
    </>
  );
}
