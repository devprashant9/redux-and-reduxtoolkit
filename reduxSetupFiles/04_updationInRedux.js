let reduxState = {
  count: 0,
  post: 20,
  likes: 30,
};

// redux provides a function to update the state and those functions are known as "reducers"
// redux provides "state" also and needs that to be "returned" with or without changes

function updateStateReducer(state) {
  return { ...state, count: state.count + 1 };
}

const updatedReduxState = updateStateReducer(reduxState);
