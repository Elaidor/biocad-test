const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    app: "./client/app.jsx",
  },
  output: {
    path: path.resolve(__dirname, "static", "build"),
    filename: "[name].[fullhash].js",
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
    },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "./client/index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        include: path.resolve(__dirname, "client"),
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(ttf|svg)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "client"),
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/react"],
        },
      },
    ],
  },
};
