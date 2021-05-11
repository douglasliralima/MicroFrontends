import { registerApplication, start } from "single-spa";


// É essa função que vai registrar as nossas aplicações e suas dependencias
// Damos um nome para nossa aplicação, de onde esse importmap virá e quando ele será ativo
// no caso esse microfront @single-spa/welcome será ativo na rota raiz da aplicação
registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@dg/react-single-parcel",
  app: () =>
    System.import(
      "@dg/react-single-parcel"
    ),
  activeWhen: (location) => location.pathname === "/single-parcel",
});

// Como aqui teremos várias rotas derivadas, podemos fazer um include para esse microfrontend
registerApplication({
  name: "@dg/react-routes",
  app: () =>
    System.import(
      "@dg/react-routes"
    ),
  activeWhen: (location) => location.pathname.includes("/react-routes"),
});

registerApplication({
  name: "@dg/react-parcel-father",
  app: () =>
    System.import(
      "@dg/react-parcel-father"
    ),
  activeWhen: (location) => location.pathname === "/react-parcel-father",
});

// Como aqui teremos várias rotas derivadas, podemos fazer um include para esse microfrontend
registerApplication({
  name: "@dg/react-lazy-route",
  app: () =>
    System.import(
      "@dg/react-lazy-route"
    ),
  activeWhen: (location) => location.pathname.includes("/react-lazy-route"),
});

// Essa é a função que vai ficar observando mudanças na rota e essas configurações de start
start({
  urlRerouteOnly: true,
});
