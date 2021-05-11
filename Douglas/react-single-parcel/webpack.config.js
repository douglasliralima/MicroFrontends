const { merge }  = require("webpack-merge");
// O webpack da single spa para react exclui os bundles do react e do react-dom, esperando que o orquestrador se responsabilize por servir
// essas dependências
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "dg",
    projectName: "react-single-parcel",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
  });
};
