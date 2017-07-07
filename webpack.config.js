const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProduction = process.argv.indexOf('-p') > -1;
if (isProduction) {
  process.env.NODE_ENV = 'production';
}

// Copy over some files because css-loader is broken
const filesToCopy = {
  // Source: destination
  './lib/materialize/css/materialize.min.css': './www/materialize.min.css',
  './lib/materialize/fonts/material-icons.css': './www/material-icons.css',
  './lib/materialize/fonts/material-icons.woff2': './www/material-icons.woff2',
  './lib/materialize/js/materialize.min.js': './www/materialize.min.js',
  './lib/materialize/fonts/roboto/Roboto-Regular.woff2': './www/fonts/roboto/Roboto-Regular.woff2',
  './node_modules/jquery/dist/jquery.min.js': './www/jquery.min.js'
};

for (let source in filesToCopy) {
  const dest = filesToCopy[source];
  fs.createReadStream(source)
    .pipe(fs.createWriteStream(dest));
}

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'www')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react' // Ensure React is loaded even in modules which don't explicitly request it
    }),
    new HtmlWebpackPlugin({
      title: 'Hello World',
      inject: true,
      template: path.resolve(__dirname, 'src/index.ejs')
    })
  ],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        loader: 'eslint-loader'
      }
    ]
  }
};