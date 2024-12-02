import { useState } from "react";
import "./styles.css";

//Page 3 - this got the same code as App and its components inside of it just all in one place

export default function App3() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]); //Use state if we want anything in our component to rerenders everytime we make a change

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => {
      //to modify existing data we have to call a function inside our setTodos set-state value and that function returns what we want the new state to be
      return [
        ...currentTodos, //... (spreading out) creates a new array currentTodos since 'todos' is immutable and we cant modify it
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    setNewItem(""); //to clear input field after adding
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          //todo.completed = completed does not work properly because we would be mutating our state. We have to create a brand new state object ...todo, completed
          return { ...todo, completed };
        }
        return todo; //if current todo doesnt match with the id then just return it
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {/*Short circuting is a js concept basically checking if length is equal 0 then write No Todos */}

        {/* Instead of hardcoding our todos we can loop through our todos and render them out with map */}
        {todos.map((todo) => {
          return (
            // important do add key={todo.id} so react knows which one we want to edit/delete when it spits out all the elements inside the array
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
              {/* this passes the function into the onClick event which is correct () => deleteTodo(todo.id) */}
              {/* but this only passes the result of that function deleteTodo(todo.id) */}
            </li>
          );
        })}
      </ul>
    </>
  );
}
