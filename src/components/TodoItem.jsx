export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li
      onClick={() => onToggleTodo(todo.id)}
      key={todo.id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <span className={todo.done ? "text-decoration-line-through" : ""}>
        {todo.description}
      </span>
      <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>
        Borrar
      </button>
    </li>
  );
};
