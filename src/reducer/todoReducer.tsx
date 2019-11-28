import { StoreState } from '../type/index'
import { TodoAction } from '../action/index'
import * as constants from '../constants/index'

export default (state: StoreState, action: TodoAction) => {
  switch (action.type) {
    case constants.ADD_TODO: {
      return {
        list: [
          ...state.list,
          {
            id: Math.random(),
            name: action.value,
            done: false
          }
        ]
      }
    }
    case constants.CHANGE_TODO: {
      return {
        list: state.list.map(item => {
          if (Number(item.id) === Number(action.id)) {
            return {
              ...item,
              done: !item.done
            }
          } else {
            return item
          }
        })
      }
    }
    case constants.DELETE_TOOD: {
      return {
        list: state.list.filter(item => {
          return Number(item.id) !== Number(action.id)
        })
      }
    }
  }
  return state
}
