import "./styles.css"

//Page 1 how it looked in the beginning. See end result in App.jsx. This is just so I know the steps and the reasonings behind React programming.

// This is a declarative approach/programming. We essentially just declaring what we want the page to look like in our JSX below. 
// This page is currently static but with 'React state' we can make it dynamic and interactive. And with hooks we can "hook" for example useState into our components (useState is a hook).

// In react you can only return one element in your components thus you can wrap everything in a element like div or a fragment which is an empty tag <></>
// otherwise if its just a string you could write return "Hello" for example or return <form></form>

export default function App1() { 

  return (
    <>
      <form className="new-item-form">
          <div className="form-row"> {/* className instead of class */}
            <label htmlFor="item">New Item</label> {/* htmlFor same as for */}
            <input type="text" id="item"/>
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
  )
}


