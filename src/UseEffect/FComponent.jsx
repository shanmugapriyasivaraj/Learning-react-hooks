import React, { useState, useEffect } from "react";

function FComponent() {
  const [time, setTime] = useState(new Date().toString());
  const [message, setMessage] = useState("Functional Component");

  useEffect(() => {
    console.log("Component Mounted or Updated");
    const interval = setInterval(showDate, 1000);
  }, [time]);

  const showDate = () => {
    setTime(new Date().toString());
  };

  return (
    <div>
      <div>{time}</div>
      <button onClick={showDate}>ShowDate</button>
      <div>{message}</div>
      <button onClick={() => setMessage("Changed Functional Component")}>
        Change Mesaage
      </button>
    </div>
  );
}

export default FComponent;
