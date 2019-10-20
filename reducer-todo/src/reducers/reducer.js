/* STEP 1 - Build a simple reducer and initial state
In a folder called reducers add a reducer file and build out a simple reducer with just a default return for now
In the same file, build your initial state object that has a list of todos. Export both the reducer and the initial state object */

export const initialState = [
  {
    task: 'Explore strange new worlds',
    id: 1800,
    completed: false
},
{
    task: 'Seek out new life and new civilizations',
    id: 1830,
    completed: false
},
{
    task: 'Boldly go where no man has gone before',
    id: 1900,
    completed: false
}
];

/* Write the case in your reducer for adding a todo (You can create a unique id with new Date()) 
Write the `case` in your reducer for toggling the completed property
Write the `case` in your reducer for filtering completed todos*/
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          item: action.payload,
          id: Date.now(),
          completed: false
        }
      ]
    case "TOGGLE_COMPLETE":
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
  };
};