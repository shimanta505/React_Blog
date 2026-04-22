import { useState } from "react"

const TodoList = () => {
    const [todo, setTodo] = useState([]);
    const [inputValue, setInputValue] = useState();


    const handleSubmit = e => {
        e.preventDefault()

        if (inputValue.trim()) {
            setTodo([...todo, inputValue]);
            setInputValue("");
        }
    }

    const handleChange = e => {
        setInputValue(e.target.value);
    }

    return (
        <div>
            <h1>todos list</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleChange} placeholder="Add a new todo" />
                <br />
                <button type="submit" onSubmit={handleSubmit}> Submit</button>

            </form>
            <ul>
                {todo.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>

        </div>
    )

}

export default TodoList;