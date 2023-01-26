const ToDoItem = ({ item: { description, done }, removeItem, toggleDone }) =>
    <li style={{ textDecoration: done ? 'line-through' : 'none' }}>
        {description}
        <button onClick={() => removeItem(description)}>Remove</button>
        <button onClick={() => toggleDone(description)}>Toggle Done</button>
    </li>


export default ToDoItem;