//webpack config

const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", "css-loader", "postcss-loader", "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules",
        // include: /flexboxgrid/
      },
      {
        test: /\.(mov|mp4|m4v|ico)$/,
        use: [
          {
            loader: "file-loader?name=[name].[ext]"
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|jpg|otf|jpeg|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      favicon: "favicon.ico",
      filename: "index.html"
    })
  ]
};
