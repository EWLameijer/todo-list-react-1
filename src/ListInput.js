import React, { useState } from "react";

const ListInput = props => {
    const [value, setValue] = useState("");

    const updateMe = event => setValue(event.target.value)

    const submit = event => {
        event.preventDefault();
        props.returnItem(value);
        setValue("");
    }

    return (
        <form onSubmit={submit}>
            <input type="text" value={value} onChange={updateMe} />
            <input type="submit" value="Add this item!" />
        </form>
    )
}

export default ListInput;