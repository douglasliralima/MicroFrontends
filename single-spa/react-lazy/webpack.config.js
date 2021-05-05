const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "synchro",
    projectName: "react-lazy",
    webpackConfigEnv,
    argv,
  });

  // O externals serve para definir imports que virão do orchestrator
  // evitando que eles se repitam aqui
  return merge(defaultConfig, {
    externals: ["react-router-dom"],
  });
};
