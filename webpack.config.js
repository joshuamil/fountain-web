const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/scripts/bundle.js'
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      },{
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'raw-loader'
          }, {
            loader: 'sass-loader'
          }, {
            loader: 'resolve-url-loader'
          }],
          fallback: 'style-loader'
        })
      },{
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.jpg$|\.jpeg$|\.png$|\.gif$/,
        use: [{
          loader: "file-loader?name=assets/images/[name].[ext]"
        }]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new ExtractTextPlugin('assets/css/bundle.scss')
  ]
};

module.exports = config;
