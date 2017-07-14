const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "bundle-sass.css"
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },

      {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract(extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                fallback: "style-loader"
            }))
        }
    ]
  },

   plugins: [
    new HtmlWebpackPlugin(
      {
        template: './src/index.html',
        favicon: './src/assets/favicon.ico'
      }
    ),

    extractSass
  ]

};

