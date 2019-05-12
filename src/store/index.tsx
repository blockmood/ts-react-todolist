import {createStore,compose,applyMiddleware} from 'redux';
import TodoReducer from '../reducer/todoReducer'
import reduxlogger from 'redux-logger'

const initalState = {
    list:[]
}

const middleware = [reduxlogger]

const storeEnhancers = compose(
    applyMiddleware(...middleware)
)

export const store = createStore(TodoReducer,initalState,storeEnhancers)
