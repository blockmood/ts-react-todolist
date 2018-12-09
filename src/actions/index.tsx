import * as contants from '../contants/index'


export interface addTodo {
    type:contants.ADD_TODO,
    value:string
}

export interface deleteTodo {
    type:contants.DELETE_TODO,
    id:number
}

export interface changeDone {
    type:contants.CHANGE_DONE,
    id:number
}

export type TodoAction = addTodo | deleteTodo | changeDone

//添加item
export const addTodo = (value:string):addTodo => ({
    type:contants.ADD_TODO,
    value
})

export const deleteTodo = (id:number) : deleteTodo => ({
    type:contants.DELETE_TODO,
    id
})

export const changeDone = (id:number) : changeDone => ({
    type:contants.CHANGE_DONE,
    id
})