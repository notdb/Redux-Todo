import { ADD_TODO } from "../actions";

const initialState = {
  title: "Todo List",
  todos: [{ value: "Walk the dog.", completed: false }]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { value: action.payload, completed: false }]
      };
    default:
      return state;
  }
}

export default reducer;
