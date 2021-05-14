const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyPlugin = require("copy-webpack-plugin");


// O segredo aqui está no ModuleFederationPlugin, nele nos temos especificando algumas propriedades
// name - Aqui é simplesmente o nome dessa library
// filename - Aqui é onde ficará toda a informação do que o app vai exportar

// remotes - aqui é onde especificamos o que ele precisa pegar para acesso remoto
// Veja o import do nav no App para ver o quão fácil é isso em ação

// exposes - Aqui o que nos expomos da nossa biblioteca para uso

// shared -Aqui são as bibliotecas que ele tiver



const deps = require("./package.json").dependencies;
module.exports = {
  entry: "./src/index",
  cache: false,

  mode: "development",
  devtool: "source-map",

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: "http://localhost:3001/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("@babel/preset-react")],
        },
      },
      {
        test: /\.md$/,
        loader: "raw-loader",
      },
    ],
  },

  plugins: [
    new CopyPlugin([{ from: "fruit", to: "fruit" }]),
    new ModuleFederationPlugin({
      name: "home",
      filename: "remoteEntry.js",
      remotes: {
        nav: "nav@http://localhost:3003/remoteEntry.js",
      },
      exposes: {
        "./ProductCarousel": "./src/ProductCarousel",
        "./fruit": "./src/fruit",
        "./ProductCard": "./src/ProductCard",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
