const postCssPresetEnv = require("postcss-preset-env");
const ExtractCssChunksPlugin = require("extract-css-chunks-webpack-plugin");
const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    frontend: ["./src/js/drawer-menus.js", "./src/js/navigation.js", "./src/js/notices.js", "./src/sass/style.scss"],
    backend: "./src/js/customizer.js",
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: "/node_modules/",
        options: {
          emitWarning: true,
          failOnError: false,
          failOnWarning: false,
        },
      },
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
          plugins: ["@babel/plugin-transform-regenerator"],
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: ExtractCssChunksPlugin.loader,
            options: {
              hot: false,
            },
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 3,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [postCssPresetEnv()],
              sourceMap: "inline",
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(svg|eot|ttf|woff)$/,
        loader: "file-loader",
        options: {
          filename: "[name].[ext]",
          outputPath: "../fonts",
          publicPath: path.relative(__dirname, "fonts"),
        },
      },
    ],
  },
  plugins: [
    new ExtractCssChunksPlugin({
      filename: "../style.css"
    }),
    new BrowserSyncPlugin({
      files: "**/*.php",
      proxy: "http://localhost:8888/wordpress",
    }),
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "js"),
    publicPath: "/",
  },
};
