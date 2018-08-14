const HtmlWebpackPlugin = require('html-webpack-plugin'); // installed via npm
const webpack = require('webpack'); // to access built-in plugins
const path = require('path');

require('dotenv').config({path: path.join(__dirname, '.env')});

let config = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new webpack.DefinePlugin({
      'process.env': {
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: './dist',
  },
};

module.exports = config;
