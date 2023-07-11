import { useState } from 'react';

const TodoItem = ({ itemProp, setTodos, delTodo }) => {  
  const [editing, setEditing] = useState(false);
  const handleChange = (id) => {
    setTodos((prevState) =>
    prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    })
  );  };

  const handleEditing = () => {
    setEditing(true);
  };

    return (<li>
      <div>
      <input type="checkbox"
    checked = {itemProp.completed} 
    onChange={() => handleChange(itemProp.id)}
    />
     {itemProp.title}
     <button onClick={handleEditing}>Edit</button>
     <button onClick={() => delTodo(itemProp.id)}>Delete</button>
      </div>
    </li>);
  };
  export default TodoItem;
  