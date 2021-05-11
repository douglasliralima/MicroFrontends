import React, { useState, useEffect } from 'react'

const AppChild = () => {
  const [tasks, updateTasks] = useState([])

  useEffect(() => {
    // Usando apenas o evento disparado no browser para detectar dados e também uma ação a se tomar
    //A dica para criar eventos unicos é "nomeMicroFrontend/Dominio/ação" eu gosto de "nomeMicroFrontend/classe/metodo"
    window.addEventListener('@dg/react-route/todo/add-task',( event : CustomEvent ) => {
      updateTasks(oldTasks => [
        ...oldTasks,
        event.detail,
      ])
    });

  }, [])

  return (
    <>
      <h1>Child</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.describe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default AppChild