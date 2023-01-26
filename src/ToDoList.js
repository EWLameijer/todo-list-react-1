import ToDoItem from "./ToDoItem";

const sortDoneThenCaseInsensitive = (left, right) => {
    if (left.done !== right.done) return (left.done) ? 1 : -1;
    return Intl.Collator().compare(left.description, right.description);
}

const ToDoList = ({ items, removeItem, toggleDone }) =>
    <ul>{items.sort(sortDoneThenCaseInsensitive).map(item =>
        <ToDoItem key={item.description} item={item} removeItem={removeItem} toggleDone={toggleDone} />
    )
    }</ul>

export default ToDoList;