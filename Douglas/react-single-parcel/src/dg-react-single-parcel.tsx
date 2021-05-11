import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
import App from "./app.component";


// Para dar start, é fundamentalmente importante subirmos na porta certa com o start, se não pegaremos o erro net::ERR_CONNECTION_REFUSED
// O singleSpaReact prepara a nossa aplicação react para ser usada em um contexto de microfrontend
const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
});

// Todo arquivo frontend ou parcel que a single-spa carrega, precisa exportar essas três funções
// Bootstrap - vai preparar a página para ser montada, criando suas configurações de div, por exemplo
// mount - A mount é quem vai pegar o que o bootstrap fez e realmente utilizar-se dele
// unmount - Já a unmount é que vai destruir o que foi montado
export const { bootstrap, mount, unmount } = lifecycles;
