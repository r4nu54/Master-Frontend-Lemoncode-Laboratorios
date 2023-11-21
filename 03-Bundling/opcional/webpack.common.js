import HtmlWebpackPlugin from 'html-webpack-plugin'

import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

export default {
  context: path.resolve(__dirname, './src'),
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx']
  },
  entry: ['./main.tsx'],
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  output: {
    filename: '[name].[chunkhash].js',
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      scriptLoading: 'blocking'
    })
  ],
  optimization: {}
}
