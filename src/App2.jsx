import { useState } from "react";
import "./styles.css";

//Page 2

export default function App2() {
  const [newItem, setNewItem] = useState(""); //useState returns two state variables in an array, the first one is for the current value and the second one is a function for updating our value
  //By default useState takes in an empty string "" (in this case if we write hello inside it will show up in the input field where we put {new item})
  //State-variables are immutable so we can't change the values by writing newItem = "new value" and we have use the function setNewItem("new value")
  //We can't set the new value here with the function. It would cause an infinite loop rendering our page blank and empty.

  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          {" "}
          {/* className instead of class */}
          <label htmlFor="item">New Item</label> {/* htmlFor same as for */}
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
          {/* value={newItem} is the value in the input field and in this case an empty string by default */}
          {/* onChange={e => setNewItem(e.target.value)} updates the value inside the input and sets it, onChange(eventlistener) and e (eventhandler)makes it possible to type and change inside the input by usestate rerendering our component */}
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 2
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}
