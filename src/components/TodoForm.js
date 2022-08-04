import React, {useState, useEffect, useRef} from 'react'
import { v4 as uuidv4 } from 'uuid';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id : uuidv4(),
            text: input
        });
        setInput('')
    }

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
        {props.edit ? ( <><input
              type="text"
              placeholder="Update item"
              value={input}
              name="text"
              className='todo-input edit'
              onChange={handleChange}
              ref={inputRef} /><button className='todo-button' onClick={handleSubmit}>Update todo</button></>) : <><input
                  type="text"
                  placeholder="add a todo"
                  value={input}
                  name="text"
                  className='todo-input'
                  onChange={handleChange}
                  ref={inputRef} /><button className='todo-button' onClick={handleSubmit}>Add todo</button></>}
        
    </form>
  )
}

export default TodoForm