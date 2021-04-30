import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./App";

// Por padrão o Single SPA vem com esses ciclos de vida
// rootComponent é o componente principal que será montado na página
const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
});

// Todo micro frontend ou parcel que o Single SPA carrega deve ter
// essas três funções abaixo que estão sendo exportadas cujas funções são:
//   - bootstrap: começa a preparar o microfrontend para ser montado na página
//   - mount: adiciona os componentes feitos na bootstrap e coloca eles na DOM
//   - unmount: é responsável por desmontar o DOM
export const { bootstrap, mount, unmount } = lifecycles;
