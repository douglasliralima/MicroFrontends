import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'

// As rotas precisam estar cadastradas a partir de um basename, esse que será o nome da aplicação microfrontend

//Cada subrota precisa também ter o match exato
const Routes = () => (
  <BrowserRouter basename="react-lazy-routes">
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
    </Switch>
  </BrowserRouter>
)

export default Routes