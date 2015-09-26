var webpack = require('webpack');

var Path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = Path.resolve(__dirname);

module.exports = {
  entry: Path.resolve(ROOT_PATH, 'src'),
  output: {
    path: Path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: Path.resolve(ROOT_PATH, 'src', 'styles')
      }, {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: Path.resolve(ROOT_PATH, 'src')
      }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({title: 'Kanban Application'})
  ]
};
