import * as React from 'react'

interface IInput {
    onSubmit:(event:React.FormEvent)=>void;
    onChange:(event:React.FormEvent<HTMLInputElement>)=>void;
    value:string
}

const Input:React.SFC<IInput> = ({onSubmit,onChange,value}) => (
    <div>
        <form onSubmit={onSubmit}>
            todo:<input type="text" value={value} onChange={onChange}/>
            <button>add item</button>
        </form>
    </div>
)

export default Input