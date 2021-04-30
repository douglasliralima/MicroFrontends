import React, { useState } from "react";
import Parcel from "single-spa-react/parcel"; // Componente do Single SPA que sabe renderizar outros parcels

const App = ({ name }) => {
  const [task, updateTask] = useState("");

  const handleChange = (event) => {
    updateTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTask("");
  };

  return (
    <>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={task} />
        <button>Add</button>
      </form>
      <Parcel config={() => System.import("@synchro/react-parcel")} />
    </>
  );
};

export default App;
