var HtmlWebpackPlugin = require('html-webpack-plugin');

config = {
  entry: "./src/index.js",
  output: {
    path: 'dist',
    filename: "bundle.js",
    path: "./build"
  },
  plugins: [new HtmlWebpackPlugin({
    title: "Game a Week"
  })],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module:{
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-map'
}

module.exports = config;
