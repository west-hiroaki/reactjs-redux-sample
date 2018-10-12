/**
 * エントリポイント：ルートになるjs。
 * webpack.config.js の entry に記述されている。
 */
import React from 'react'
import ReactDOM from 'react-dom'

// ./containers/App.js の読み込み
import App from './containers/App'

ReactDOM.render(<App />, document.getElementById('root'))
