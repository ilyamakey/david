const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    main: [
      './src/index.js',
      './src/index.sass'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },
  devServer: {
    contentBase: './'
  },
  module: {
        rules: [{
            test: /\.sass$/,
            use: ExtractTextPlugin.extract({
            use: [{
                loader: "css-loader?url=false&minimize=true" // translates CSS into CommonJS
            }, {
                loader: "postcss-loader"
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
          })
        }]
    },
  plugins: [
    new ExtractTextPlugin("main.css"),
  ]
};
