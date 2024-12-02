import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            id={todo.id}
            completed={todo.completed}
            title={todo.title}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />

          //We need key here because this is rendering inside an array and we need key to know which id of the object it is
          // <TodoItem {...todo}  key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/> //This code is the same as above
        );
      })}
    </ul>
  );
}
