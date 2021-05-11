import React, { useState } from 'react'
import Parcel from 'single-spa-react/parcel'
import { v4 as uuid } from 'uuid'

const App = ({ name, mountParcel }) => {
  const [task, updateTask] = useState('')

  const handleChange = event => {
    updateTask(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    // Envio simples de evento usando a janela do browser
    //A dica para criar eventos unicos é "nomeMicroFrontend/Dominio/ação" eu gosto de "nomeMicroFrontend/classe/metodo"
    window.dispatchEvent(new CustomEvent('@dg/react-route/todo/add-task', {
      detail: {
        id: uuid(),
        describe: task,
      }
    }));

    
    updateTask('')
  }

  return (
    <>
      <h1>Father</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={task} />
        <button>Add</button>
      </form>
      {/* Esse é um componente do react que sabe renderizar outros parcels, para isso você só precisa dizer a ele o que importar */}
      {/* que deve estar em algum importmap que esteja acessível ao componente */}
      {/* A função de config vai nos dar as funções de bootstrap, mount, unmount que estão disponiveis no nosso import */}
      {/* O mountParcel é uma requisição que passou a ser requirida a partir da versão 4 do single-SPA, ela vai ser quem montará o elemento*/}
      <Parcel
        config={() => System.import('@dg/react-parcel')}
        wrapWith="div"
        mountParcel={mountParcel}
        />
    </>
  )
}

export default App