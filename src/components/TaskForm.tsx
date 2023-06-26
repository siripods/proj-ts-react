import React, {useRef} from "react";

interface TaskFormProp {
    onAddItem:(name:string)=>void;
}

function TaskForm({onAddItem}:TaskFormProp):JSX.Element {
    const inputRef = useRef<HTMLInputElement>(null);

    function saveData(e:React.FormEvent) {
        e.preventDefault();
        const name = inputRef.current!.value;
        console.log(`inputRef = ${name}`);
        onAddItem(name);
        inputRef.current!.value = "";
    }

    return (
        <form onSubmit={saveData}>
            <input type="text" placeholder="Enter your task" ref={inputRef} />
            <button type="submit">Save</button>
        </form>
    )
}

export default TaskForm;