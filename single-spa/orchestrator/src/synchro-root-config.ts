import { registerApplication, start } from "single-spa";

// Controla os fragmentos de microfrontends, é o orquestrador que controla o que
// eles terão que renderizar, o que terão que baixar, etc
registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    // Arquivo importado pela aplicação para usso, esse próprio arquivo já é um microfrontend
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  // Abaixo é indicado quando será usado esse arquivo, no caso na root /
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@synchro/navbar",
//   app: () => System.import("@synchro/navbar"),
//   activeWhen: ["/"]
// });

// Essa função é o que de fato começa a montar os frontends da página
start({
  urlRerouteOnly: true,
});
