/* (Reminder: ({ dispatch }) is simply using JS destructuring assignment to extract dispatch from this.props object. dispatch() is the method used to dispatch actions and trigger state changes)

Function Todo takes in todo and dispatch as arguments and dispatches an action to toggle a todo's completed field when clicked. When clicked(toggled), the name of the selected item(todo) will have a red line through it*/

import React from 'react';

function Todo ({ todo, dispatch }) {
  const toggleCompleted = () => {
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: todo.id
    });
  };

  return(
    <div
      onClick={toggleCompleted}
      className={`todo $(todo.completed ? "completed" : "")`}
      style={{ textDecoration: todo.completed ? "red line-through" : "" }}>
      <p>{ todo.todo }</p>
    </div>
  )
};

export default Todo;

/* - Build a function that will dispatch an action to toggle a todo's completed field
- Invoke this new function when you click on a todo
- Style your todo to somehow show that it is completed (be creative here!) */