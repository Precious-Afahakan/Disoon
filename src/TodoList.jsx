import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal.trim() === "") return;

    const newTodo = {
      id: uuidv4(),
      text: inputVal,
    };

    setTodos([...todos, newTodo]);
    setInputVal("");
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <div className="todo_body">
      <div className="todo_box">
        <h1>Todo list</h1>
        <form onSubmit={(e) => handleSubmit(e)} className="form_content">
          <input
            className="inputy"
            type="text"
            onChange={(e) => handleChange(e)}
            value={inputVal}
            placeholder="Add a new todo"
          />
          <button type="submit" className="butty">
            Add todo
          </button>
        </form>
        <div className="output_box">
          {todos.map((todo) => (
            <div key={todo.id} className="display_box">
              <span>{todo.text}</span>
              <button
                onClick={() => removeTodo(todo.id)}
                className="delete_but"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
