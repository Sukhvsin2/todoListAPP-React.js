import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [listItems, setList] = useState([]);

  function update(event) {
    const newItem = event.target.value;
    setItem(newItem);
  }

  function add() {
    setList((prev) => {
      return [...prev, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={update} type="text" value={item} />
        <button onClick={add}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map((listItem) => (
            <div>
              <li>{listItem}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
