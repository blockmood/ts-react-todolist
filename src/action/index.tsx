import * as constants from '../constants/index'

export interface addTodo {
  type: constants.ADD_TODO
  value: string
}

export interface changeTodo {
  type: constants.CHANGE_TODO
  id: boolean
}

export interface deleteTodo {
  type: constants.DELETE_TOOD
  id: boolean
}

export type TodoAction = addTodo | changeTodo | deleteTodo

export const addTodo = (value: string): addTodo => ({
  type: constants.ADD_TODO,
  value
})

export const changeTodo = (id: boolean): changeTodo => ({
  type: constants.CHANGE_TODO,
  id
})

export const deleteTodo = (id: boolean): deleteTodo => ({
  type: constants.DELETE_TOOD,
  id
})
