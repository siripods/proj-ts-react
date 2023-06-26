import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import TaskList from './components/TaskList';
import Item from '../src/models/item';
import TaskForm from './components/TaskForm';

function App() {
  //declare state name 'items', function which update state 'setItems',  
  //use interface 'Item', initial value is empty array
  const [items,setItems] = useState<Item[]>([]);
  
  function generateID() {
    return Math.floor(Math.random()*1000);
  }
  const addItem = (name:string)=> {
    console.log(`value from form = `, name);
    setItems([...items,{id:generateID(), name}]);
  }

  /* const items = [
    {id:1, name:"coding"},
    {id:2, name:"bugfix"},
    {id:3, name:"testing"}
  ]; */

  return (
    <div className="App">
      <Task text="my task"/>
      <TaskForm onAddItem={addItem}/>
      <TaskList items={items}/>
    </div>
  );
}

export default App;
