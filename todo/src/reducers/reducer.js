import { ADD_TODO, TOGGLE_TODO } from "../actions";

const initialState = {
  title: "Todo List",
  todos: [{ value: "Walk the dog.", completed: false, id: Date.now() }]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { value: action.payload, completed: false, id: Date.now() }
        ]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      };

    default:
      return state;
  }
}

export default reducer;
