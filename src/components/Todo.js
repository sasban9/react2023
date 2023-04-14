import { ACTIONS } from "./AppThree";

export default function Todo({ todo, dispatch }) {
  return (
    <tr>
      <td>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
          }
        >
          Toggle
        </button>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
          }
        >
          Delete
        </button>
      </td>
      <td>
        <span
          style={{
            color: todo.complete ? "#ddd" : "#000",
            textDecoration: todo.complete ? "line-through" : "",
            paddingLeft: 20,
          }}
        >
          {todo.name}
        </span>
      </td>
    </tr>
  );
}
