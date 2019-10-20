/* (Reminder: The reducer hook:  Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method.)

Initial state is set by the reducer, and the action dispatches the array todo object from reducer.js.
State (todo object from reducer.js) is mapped over and returns each item/todo in the array/object with parameters of keys (id's), the todo item itself (also named todo), and the action to be dispatched, followed by the TodoForm*/

import React, { useReducer } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import { todo, reducer } from '../reducers/reducer';

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, todo);

  return(
    <div className="todo-list">
      {state.map(todo => {
        return <Todo
          key={todo.id}
          todo={todo}
          dispatch={dispatch}
        />
      })}
      <TodoForm dispatch={ dispatch } />
    </div>
  );
};

export default TodoList;

/* STEP 2 - Set up state in your component.
Using the reducer hook, set up state in your component. Think about what you'll need in order to use the reducer hook, and think about what it returns. */