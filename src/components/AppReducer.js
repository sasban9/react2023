import "./App.css";
import { useReducer, useState } from "react";
import Todo from "./Todo";

export const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name, complete: false };
}

export default function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  //   const [count, setCount] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    if (name !== "") dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName("");
  }

  return (
    <>
      <h2>useReducer Demo</h2>
      <form onSubmit={handleSubmit}>
      enter todo and submit<br/>
        <input
          placeholder="Make a toast"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <hr />
      <p>List of todos appear here</p>
      <table>
        <thead>
          <tr style={{ background: "#666", color: "#fff" }}>
            <td>actions</td>
            <td>todo</td>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
          })}
        </tbody>
      </table>
    </>
  );
}
