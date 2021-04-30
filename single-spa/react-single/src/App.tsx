import React, { useState } from "react";

// O name é injetado na declaração do rootComponent
const App = ({ name }) => {
  const [counter, updateCounter] = useState(0);
  const handleChange = (type) => {
    updateCounter((oldCounter) => oldCounter + type);
  };

  return (
    <>
      <h1>{name}</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={() => handleChange(-1)}>-1</button>
      <button onClick={() => handleChange(1)}>+1</button>
    </>
  );
};

export default App;
