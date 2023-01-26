import './App.css';
import Header from './Header';
import ListInput from './ListInput';
import ToDoList from './ToDoList';
import React, { useState } from "react";

const App = () => {
  const [toDoList, setToDoList] = useState([]);

  const equalIgnoringCase = (firstString, secondString) => firstString.localeCompare(secondString, undefined, { sensitivity: 'accent' }) === 0;

  const addItem = text => toDoList.some(item => equalIgnoringCase(item.description, text)) ? alert(`'${text}' is already in the list!`) :
    setToDoList([...toDoList, { description: text, done: false }]);

  const removeItem = text =>
    setToDoList(toDoList.filter(n => n.description !== text));

  const toggleDone = text => {
    const index = toDoList.findIndex(item => item.description === text)
    const originalItem = toDoList[index];
    const toggledItem = { ...originalItem, done: !originalItem.done };
    setToDoList(Object.values({ ...toDoList, [index]: toggledItem }));
  }

  return (
    <div className="App">
      <Header />
      <ListInput returnItem={addItem} />
      <ToDoList items={toDoList} removeItem={removeItem} toggleDone={toggleDone} />
    </div>)
}

export default App;