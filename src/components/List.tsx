import * as React from 'react'

interface IList{
    list:Array<{id:number,text:string,done:boolean}>,
    onDelete:(id:number)=> void;
    onChangeDone:(id:number) => void;
}

const List:React.SFC<IList> = ({list,onDelete,onChangeDone}) => (
    <div>
        <ul>
            {
                list && list.length > 0 ? 

                list.map(item => {
                   return <li key={item.id} style={
                    item.done ? {'textDecoration':'line-through'} : {}
                   } 
                   onClick={onChangeDone.bind(null,item.id)}>{item.text} 
                   <button onClick={onDelete.bind(null,item.id)}>x</button></li>
                })

                : ''
            }
        </ul>
    </div>
)


export default  List