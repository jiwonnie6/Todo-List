const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // Use `MiniCssExtractPlugin.loader` instead of `style-loader` in production
          process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader'
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};