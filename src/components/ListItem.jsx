import React from "react";

export default function ListItem({ todo, id }) {
  return (
    <li id={id}>
      <label>
        <input type="checkbox" />
        <span>{todo}</span>
      </label>
    </li>
  );
}
