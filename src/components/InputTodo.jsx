import { useState } from "react";

const InputTodo = ({addTodoItem}) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if(title.trim()) {
        addTodoItem(title);
        setTitle('');
        setMessage('');
    } else {
        setMessage('please complete this field');
    }
  }

  const handleChange = (e) => {
    setTitle(e.target.value)
  }
  return(
    <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="add Task"
          value={title}
          onChange={handleChange}
          className="input-text"
        />
        <button className="input-submit" type="submit">Submit</button>
        <span className="submit-warning">{message}</span>
    </form>
  )
};

export default InputTodo;