import React from 'react'
import { Provider, connect } from 'react-redux'
import configureStore from '../store/configureStore'

// ./containers/Router.js の読み込み
import Router from './Router'

const store = configureStore({})
const mapStateToProps = () => ({})
const App = connect(mapStateToProps)(Router)
const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default AppContainer
