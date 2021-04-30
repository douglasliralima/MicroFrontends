import { registerApplication, start } from "single-spa";

// Controla os fragmentos de microfrontends, é o orquestrador que controla o que
// eles terão que renderizar, o que terão que baixar, etc
registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    // Arquivo importado pela aplicação para uso, esse próprio arquivo já é um microfrontend
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  // Abaixo é indicado quando será usado esse arquivo, no caso na root /
  activeWhen: (location) => location.pathname === "/",
});

// Importação de um micro frontend:
registerApplication({
  name: "@synchro/react-single",
  app: () => System.import("@synchro/react-single"),

  // É possível fazer com que o fragmento de micro frontend execute em qualquer path que se inicie com um certo valor fazendo:
  //activeWhen: ["/react-single"],
  //  ou
  //activeWhen: (location) => location.pathname.startsWith("/react-single")
  // Dessa forma acessar tanto http://localhost:9000/react-single quanto http://localhost:9000/react-single/2
  // faz com que o fragmento do react-single ser exibido ou poder ser usado na tela

  // É possível definir o react-single para ativer apenas nesse exato path fazendo:
  activeWhen: (location) => location.pathname === "/react-single",
  // Dessa segunda forma, o micro frontend apenas é exibido ou usável em http://localhost:9000/react-single
});

registerApplication({
  name: "@synchro/react-multiples",
  app: () => System.import("@synchro/react-multiples"),
  activeWhen: (location) => location.pathname.startsWith("/react-multiples"),
});

registerApplication({
  name: "@synchro/react-parcel",
  app: () => System.import("@synchro/react-parcel"),
  activeWhen: (location) => location.pathname === "/react-parcel",
});

registerApplication({
  name: "@synchro/react-route",
  app: () => System.import("@synchro/react-route"),
  activeWhen: (location) => location.pathname === "/react-route",
});

// Essa função é o que de fato começa a montar os frontends da página
start({
  urlRerouteOnly: true,
});
