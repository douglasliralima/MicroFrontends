import React, { useState } from "react";
import Parcel from "single-spa-react/parcel"; // Componente do Single SPA que sabe renderizar outros parcels
import { mountRootParcel } from "single-spa";
import { v4 as uuid } from "uuid";

const App = ({ name }) => {
  const [task, updateTask] = useState("");

  const handleChange = (event) => {
    updateTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Previne que a página não recarregue por padrão
    dispatchEvent(
      // Evento customizado com o nome @synchro/react-route/todo/add-task
      // e com um atributo detail que possui um id gerado pelo uuid e
      // a task digitada no input que é exibido na tela
      new CustomEvent("@synchro/react-route/todo/add-task", {
        detail: {
          id: uuid(),
          describe: task,
        },
      })
    );
    updateTask("");
  };

  return (
    <>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={task} />
        <button>Add</button>
      </form>
      <Parcel
        config={() => System.import("@synchro/react-parcel")}
        // Da documentação do single-spa-react:
        // If you are rendering the Parcel component from a single-spa application, you do not need to pass a
        // mountParcel prop. But if you have a separate react component tree that is not rendered by
        // single-spa-react, you **must** pass in a mountParcel prop
        mountParcel={mountRootParcel}
      />
    </>
  );
};

export default App;
