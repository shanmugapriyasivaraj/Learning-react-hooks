// import React, { useState, useEffect } from "react";

// function FComponent() {
//   const [time, setTime] = useState(new Date().toString());
//   const [message, setMessage] = useState("Functional Component");

//   useEffect(() => {
//     console.log("Component Mounted or Updated");
//     const interval = setInterval(showDate, 1000);
//   }, [time]);

//   const showDate = () => {
//     setTime(new Date().toString());
//   };

//   return (
//     <div>
//       <div>{time}</div>
//       <button onClick={showDate}>ShowDate</button>
//       <div>{message}</div>
//       <button onClick={() => setMessage("Changed Functional Component")}>
//         Change Mesaage
//       </button>
//     </div>
//   );
// }

// export default FComponent;

import React, { useContext } from "react";
import { CounterContext } from "./CreateContext";

function FComponent({ counter }) {
  const value = useContext(CounterContext);

  return (
    <div className="border">
      <h1>Function Component</h1>

      <h2>{value}</h2>
      <hr></hr>

      <Fchild counter={counter} />
    </div>
  );
}

const Fchild = ({ counter }) => {
  const value = useContext(CounterContext);
  return (
    <div className="border">
      <h1>Function child component</h1>

      <h2>{value}</h2>
    </div>
  );
};

export default FComponent;
