/* TodoForm has 3 handlers for changes (retrieve the value of the target and set it as state), submits (dispatch the action type from reducer ADD_TODO with the payload in todo, then set the new state), and completed (dispatch the action type from reducer CLEAR_COMPLETED).
Return a form on the page that triggers handleSubmit (submitting the form itself), handleChange (an input field), and handleCompleted (a button) that were set up*/

import React, { useState } from 'react';

const TodoForm = ({ dispatch }) => {
  const [todo, setTodo] = useState('');

  const handleChange = event => {
    setTodo(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({
      type:  'ADD_TODO',
      payload: todo
    });
    setTodo('');
  };

  const handleCompleted = event => {
    event.preventDefault();
    dispatch({
      type: 'CLEAR_COMPLETED'
    });
  };

  return(
    <div>
      <form onSubmit={ handleSubmit }>
        <input
          name="todo"
          onChange={handleChange}
          value={todo}
        />
        <button>Add New Task</button>
        <p>
          Click on any task to mark it as completed.
        </p>
        <p>
        Click the button to clear all completed tasks.
        </p>
        <p> 
        <button onClick={ handleCompleted }>
          Clear Completed
        </button>
        </p>
      </form>
    </div>
  )
};

export default TodoForm;

/* Build a form to add todos to your list
Build a function that will dispatch an action to add a new todo */