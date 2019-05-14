const initialState = {
  title: "Todo List",
  todos: [{ value: "Walk the dog.", completed: false }]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
