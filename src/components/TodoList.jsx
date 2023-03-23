import ListItem from "./ListItem";

export default function TodoList({ todoList, getTodo }) {
  console.log(todoList);
  console.log(getTodo);
  return (
    <ul>
      {/* 옵셔널체이닝 쓰는 이유: useEffect로 인한 렌더링 순서상 부모컴포넌트에서 투두리스트값이 undefined인 상태로 먼저 투두리스트값에 전달 되기 때문에 처음에 렌더링이 안되므로 */}
      {todoList?.map((v) => {
        return (
          <ListItem
            key={v.id}
            todo={v.todo}
            id={v.id}
            isCompleted={v.isCompleted}
            getTodo={getTodo}
          />
        );
      })}
    </ul>
  );
}
