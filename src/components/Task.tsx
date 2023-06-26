import React from 'react';

interface itext {
    text:string
}

function Task(props:itext):JSX.Element {
    return <h1>{props.text}</h1>
}

export default Task;
