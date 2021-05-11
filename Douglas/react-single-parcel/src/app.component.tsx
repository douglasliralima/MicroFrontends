import React, { useState } from "react";

// O name é uma das poucas coisas que o singleSpaReact injeta pra gente, ele é exatamente o nome da nossa aplicação
const App = ({ name }) => {
    const [counter, updateCounter] = useState(0)
  
    const handleChange = type => {
      updateCounter(oldCounter => oldCounter + type)
    }
  
    return (
      <>
        <h1>{name}</h1>
        <h3>Counter: {counter}</h3>
        <button onClick={() => handleChange(-1)}>Decrement</button>
        <button onClick={() => handleChange(1)}>Increment</button>
      </>
    )
  }

export default App;