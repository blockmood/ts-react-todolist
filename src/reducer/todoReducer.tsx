import {StoreState} from '../type/index'
import {TodoAction} from '../actions/index'
import * as contants from '../contants/index'

export default (state:StoreState,action:TodoAction) => {
    switch(action.type){
        case contants.ADD_TODO:{
            return {
                ...state,
                list:[
                    ...state.list,
                    {
                        id:Math.random(),
                        text:action.value,
                        done:false
                    }
                ]
            }
        }
        
        case contants.DELETE_TODO:{
            return {
                ...state,
                list: state.list.filter(item => {
                    return item.id !== action.id
                })
            }
        }

        case contants.CHANGE_DONE:{
            return {
                ...state,
                list:state.list.map(item => {
                    if(item.id === action.id){
                        return {...item,done:!item.done}
                    }else{
                        return item
                    }
                })
            }
        }
    }
    return state
}
