import {createStore} from 'redux';
import TodoReducer from '../reducer/todoReducer'

const initalState = {
    list:[]
}

export const store = createStore(TodoReducer,initalState)
