const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },

  plugins: [
    new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
    ],
    
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
        use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },  
      { test: /\.handlebars$/, loader: "handlebars-loader" },
      { test: /\.hbs$/, loader: "handlebars-loader" }
    ]
  }
};