const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProduction = process.argv.indexOf('-p') > -1;
if (isProduction) {
	process.env.NODE_ENV = 'production';
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
    new HtmlWebpackPlugin({
      title: 'Hello World',
      inject: true,
      template: path.resolve(__dirname, 'src/index.ejs')
    })
  ],
  devtool: (isProduction) ? 'nosources-source-map' : 'cheap-eval-source-map',
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
      }
    ]
  }
};