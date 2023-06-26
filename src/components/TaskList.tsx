import React from 'react';
import Item from '../models/item'

interface TaskListProp {
    items:Item[]
}

function TaskList(props:TaskListProp):JSX.Element {
    return (
        <div>
            <h1>Todos Today</h1>
            <ul>
                {
                    props.items.map((element, i)=> (
                        <li key={element.id}>{i+1}. {element.name}</li>
                    ))
                }
            </ul>    
        </div>    
    )
}

export default TaskList;
