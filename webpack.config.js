const path = require('path')
const history = require('connect-history-api-fallback')
const convert = require('koa-connect')
const proxy = require('http-proxy-middleware');
const { EnvironmentPlugin } = require('webpack')

module.exports = {
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  entry: {
    app: ['./src/index.js']  // エントリーポイント：メインになるjsの指定
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public222222')  // これなに？？元はpublicだった
  },
  serve: {
    add: (app, middleware, options) => {
      const historyOptions = {}
      app.use(convert(proxy('/api', {target: 'http://localhost:4000'})))
      app.use(convert(history(historyOptions)))
    },
    content: [path.resolve(__dirname, 'public')],   // HTMLファイルが置いてあるディレクトリの指定。この場合 ./public が対象
    hot: true,
    port: 8888
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1
            }
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map'
}
