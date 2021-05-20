const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = () => {
  return {
    entry: "./src/index.js",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.resolve("src"),
          use: ["babel-loader"],
        },
      ],
    },
    plugins: [new HtmlWebpackPlugin()],
  };
};
