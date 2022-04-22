// import "./App.css";
// import React, { useState } from "react";
// function App() {
//   const [name, setName] = useState("Priya");
//   const [flag, setFlag] = useState(false);
//   const [steps, setSteps] = useState(0);
//   const [names, setNames] = useState([]);

//   function changeName() {
//     console.log("clicked");

//     return setFlag(!flag);
//   }

//   function increment() {
//     setSteps((prevState) => prevState + 1);
//     setSteps((prevState) => prevState + 1);
//   }

//   function decrement() {
//     return setSteps(steps - 1);
//   }

//   function addNames(e) {
//     e.preventDefault();
//     setNames([...names, { id: names.length, name }]);
//     setName("");
//   }

//   return (
//     <div className="App">
//       <div>Hello {flag ? name : ""}</div>
//       <button onClick={changeName}>Change name</button>
//       <hr></hr>
//       <div> {flag ? name : ""}</div>
//       <button onClick={increment}>Increment</button>
//       <div>{steps}</div>
//       <button onClick={decrement}>Decrement</button>
//       <hr></hr>
//       <form onSubmit={addNames}>
//         <input
//           type="text"
//           value={name}
//           placeholder="add names"
//           onChange={(e) => setName(e.target.value)}
//         />
//         <button>Submit</button>
//       </form>
//       <hr></hr>
//       <ul>
//         {names.map((item) => {
//           <li key={item.id}>{item.name}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import "./App.css";
// import CComponent from "../src/UseEffect/CComponent";
// import FComponent from "../src/UseEffect/FComponent";

// function App() {
//   const [flag, setFlag] = useState(true);

//   return (
//     <div className="App">
//       <div>
//         <button onClick={() => setFlag(!flag)}>Toggle class component </button>
//       </div>
//       {flag ? <FComponent /> : ""}
//     </div>
//   );
// }

// export default App;

import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const inputElement = useRef("");
  const previousCountRef = useRef("");

  console.log(inputElement);

  useEffect(() => {
    previousCountRef.current = count;
  }, [count]);

  const resetInput = () => {
    setName("");
    inputElement.current.focus();
    console.log(inputElement.current.value);
    inputElement.current.value = "priya";
  };

  return (
    <div className="App">
      <div>
        <input
          ref={inputElement}
          name="name"
          autoComplete="off"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button onClick={resetInput}>Reset</button>
      </div>
      <div>My name is {name}</div>
      <div>
        <h1>Random Counter:{count}</h1>
        {typeof previousCountRef.current !== "undefined" && (
          <h2>Previous Count : {previousCountRef.current}</h2>
        )}
        <button onClick={(e) => setCount(Math.ceil(Math.random() * 100))}>
          Generate Number
        </button>
      </div>
    </div>
  );
}
export default App;
