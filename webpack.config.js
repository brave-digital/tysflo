//webpack config


const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    publicPath: '/'
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
        use: ["style-loader", "css-loader", "postcss-loader",  "sass-loader"]
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules",
        include: /flexboxgrid/
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
        test: /\.(png|woff|woff2|otf|eot|jpg|jpeg|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  devServer: {
    historyApiFallback: true, 
  },
};
