import React, { useState, useEffect } from "react";
import { listenEvent } from "@synchro/utils";

const App = () => {
  const [tasks, updateTasks] = useState([]);

  // O Listener apenas é preciso ser registrado uma única vez e
  // isso é feito através de um useEffect
  useEffect(() => {
    // Utiliza-se de um Evento Customizado similar a onClick, onChange, etc
    // para capturar o Evento definido no react-route e atualizar
    // as tasks exibidas na tabela com os valores que vierem do react-route
    listenEvent("@synchro/react-route/todo/add-task", (event: CustomEvent) => {
      updateTasks((oldTasks) => [...oldTasks, event.detail]);
    });
  }, []);

  return (
    <>
      <h1>@mc/react-parcel</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.describe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
