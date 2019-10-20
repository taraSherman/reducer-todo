/* Set up initial state as an array of tasks in a variable named todo. Each item in the array has a todo, an id, and a boolean for completed (set to false) */
export const todo = [
  {
    todo: 'Explore strange new worlds',
    id: 1800,
    completed: false
},
{
    todo: 'Seek out new life and new civilizations',
    id: 1830,
    completed: false
},
{
    todo: 'Boldly go where no man has gone before',
    id: 1900,
    completed: false
}
];

/* (Reminder: The reducer is a pure function that takes 2 arguments (previous state and an action), and returns the next state. (previousState, action) => newState.)

This reducer (stored in a variable called reducer) takes in 2 objects: arguments called state and action (payload of information). The type of the action is a switch statement (
  1. evaluated once
  2. value compared with the values of each case
  3. if there is a match, the associated block of code is executed
  4. If there is no match, the todo is returned.

The cases here are to add (return payload, i.e. list of todos with new todo appended), toggle completed (map over the array in state, if the id of a todo matches the payload, then return the list of todos with that specific todo marked as completed), or clear completed (filter out any todo marked as completed and return state, i.e. the list of todos remaining after filtering).
*/
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          todo: action.payload,
          id: Date.now(),
          completed: false
        }
      ]
    case "TOGGLE_COMPLETED":
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          };
        };

        return todo;
      });

    case "CLEAR_COMPLETED":
      return state.filter(todo => !todo.completed);
      default:
        return state;
  };
};

/* STEP 1 - Build a simple reducer and initial state
In a folder called reducers add a reducer file and build out a simple reducer with just a default return for now
In the same file, build your initial state object that has a list of todos. Export both the reducer and the initial state object */

/* Write the case in your reducer for adding a todo (You can create a unique id with new Date()) 
Write the `case` in your reducer for toggling the completed property
Write the `case` in your reducer for filtering completed todos*/