const { resolve } = require("path");

function resolveApp(relativePath) {
  return resolve(__dirname, relativePath);
}

module.exports = {
  entry: resolveApp("./src/server.js"),
  target: "node",
  output: {
    path: resolveApp("./build"),
    filename: "server.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
