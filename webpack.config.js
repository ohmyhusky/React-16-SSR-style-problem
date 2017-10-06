const { resolve } = require("path");

function resolveApp(relativePath) {
  return resolve(__dirname, relativePath);
}

module.exports = {
  entry: resolveApp("./src/index.js"),
  output: {
    path: resolveApp("./build"),
    filename: "client.js"
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
