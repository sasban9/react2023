import { ACTIONS } from "./AppReducer";

export default function Todo({ todo, dispatch }) {
  return (
    <tr>
      <td>
        <input type="checkbox"
          onClick={() =>
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
          }
        />
       
      </td>
      {/* <td>
                
      <span
            style={{cursor:'pointer', color:'red'}}
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
          }
        >
          X
        </span>
      </td> */}
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
