import * as React from 'react'
import List from '../components/List'
import Input from '../components/Input'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import * as actions from '../actions/index'
import {StoreState} from '../type/index'

interface ITodoApp {
    addTodoItem:(value:string)=>void;
    deleteTodo:(id:number) => void;
    changeDone:(id:number) => void;
    list:Array<{id:number,text:string,done:boolean}>
}

class TodoApp extends React.Component<ITodoApp,object>{
    state = {
        value:''
    }

    handleSubmit = (event:React.FormEvent) => {
        const {value} = this.state
        event.preventDefault()
        if(!value.trim()){
            alert('请输入内容')
            return
        }
        this.props.addTodoItem(value)
        this.setState({
            value:''
        })
    }

    handleChange = (event:React.FormEvent<HTMLInputElement>) => {
        this.setState({
            value:event.currentTarget.value
        })
    }

    handeleDel = (id:number) => {
        this.props.deleteTodo(id)
    }

    onChangeDone = (id:number) => {
        this.props.changeDone(id)
    }

    public render(){
        const {list} = this.props
        return (
            <React.Fragment>
                <Input onSubmit={this.handleSubmit} onChange={this.handleChange} value={this.state.value}/>
                <List onChangeDone={this.onChangeDone} list={list} onDelete={this.handeleDel} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state:StoreState) => {
    return {
        list:state.list
    }
}

const mapDispatchToProps = (dispatch:Dispatch<actions.TodoAction>) => ({
    addTodoItem:(value:string)=> dispatch(actions.addTodo(value)),
    deleteTodo:(id:number) => dispatch(actions.deleteTodo(id)),
    changeDone:(id:number) => dispatch(actions.changeDone(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoApp)