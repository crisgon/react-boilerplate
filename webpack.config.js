const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackDashBoard = require("webpack-dashboard/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CheckerPlugin } = require("awesome-typescript-loader");

const DEV_MODE = process.env.NODE_ENV === "development";

module.exports = {
  entry: ["react-hot-loader/patch", "./src/index.js"],
  target: "web",
  mode: DEV_MODE ? "development" : "production",
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
    filename: "bundle.js",
  },

  resolve: {
    modules: ["node_modules", "src"],
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[local]",
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: !DEV_MODE,
              modules: {
                localIdentName: "[name]__[local]___[contenthash:base64:5]",
              },
              importLoaders: 1,
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },

  plugins: [
    new WebpackDashBoard(),
    new HtmlWebpackPlugin({
      template: "./src/template/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: DEV_MODE ? "[name].css" : "[name].[contenthash].css",
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
    }),
    new CheckerPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    contentBase: path.join(__dirname, "public"),
    publicPath: "/",
    hot: true,
    port: 8080,
  },
};
