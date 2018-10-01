import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import reducer from '../reducers'

/**
 * Storeを作成して返却する関数
 * @param {Object} preloadedState 初期State
 * @return {Object} store
 */
export default function(preloadedState) {
  return createStore(
    reducer,
    preloadedState,
    applyMiddleware(promiseMiddleware)
  )
}
