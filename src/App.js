import "./App.css";
import React, { useState } from "react";
function App() {
  const [name, setName] = useState("Priya");
  const [flag, setFlag] = useState(false);
  const [steps, setSteps] = useState(0);
  const [names, setNames] = useState([]);

  function changeName() {
    console.log("clicked");

    return setFlag(!flag);
  }

  function increment() {
    setSteps((prevState) => prevState + 1);
    setSteps((prevState) => prevState + 1);
  }

  function decrement() {
    return setSteps(steps - 1);
  }

  function addNames(e) {
    e.preventDefault();
    setNames([...names, { id: names.length, name }]);
    setName("");
  }

  return (
    <div className="App">
      <div>Hello {flag ? name : ""}</div>
      <button onClick={changeName}>Change name</button>
      <hr></hr>
      <div> {flag ? name : ""}</div>
      <button onClick={increment}>Increment</button>
      <div>{steps}</div>
      <button onClick={decrement}>Decrement</button>
      <hr></hr>
      <form onSubmit={addNames}>
        <input
          type="text"
          value={name}
          placeholder="add names"
          onChange={(e) => setName(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <hr></hr>
      <ul>
        {names.map((item) => {
          <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
