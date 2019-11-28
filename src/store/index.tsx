import { createStore, compose, applyMiddleware } from 'redux'
import TodoReducer from '../reducer/TodoReducer'
import logger from 'redux-logger'

const middleware = [logger]
 
const initState = {
  list: []
}

const storeEnhangeres = compose(applyMiddleware(...middleware))

export default createStore(TodoReducer, initState, storeEnhangeres)
