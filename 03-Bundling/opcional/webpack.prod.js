import { merge } from 'webpack-merge'
import Dotenv from 'dotenv-webpack'

import common from './webpack.common.js'

import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

export default merge(common, {
  mode: 'production',
  output: {
    filename: 'js/[name].[chunkhash].js',
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportLocalsConvention: 'camelCase',
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: '[id].css'
    }),
    new Dotenv({
      path: './prod.env'
    })
  ]
})
