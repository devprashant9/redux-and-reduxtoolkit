import { createStore } from "redux";

const initialState = {
  count: 0,
  post: 20,
  likes: 30,
};

function updateStateReducer(state = initialState, action) {
  // initial state is mandatory
  if (action.type === "increase/by/20") {
    return { ...state, count: state.count + action.payload };
  } else if (action.type === "decrease/by/1") {
    return { ...state, count: state.count - 1 };
  }
  return state;
}

// const updatedReduxState = updateStateReducer(reduxState, {type: "increase/by/20", payload: 20});

const store = createStore(updateStateReducer);
console.log(store.getState());
