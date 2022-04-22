import "./App.css";
import React, { useState } from "react";
function App() {
  const [name, setName] = useState("Priya");
  const [flag, setFlag] = useState(false);

  function changeName() {
    console.log("clicked");

    return setFlag(!flag);
  }

  return (
    <div className="App">
      <div>Hello {flag ? name : ""}</div>
      <button onClick={changeName}>Change name</button>
    </div>
  );
}

export default App;
