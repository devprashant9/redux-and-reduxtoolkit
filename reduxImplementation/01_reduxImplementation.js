import { createStore } from "redux";

const initialState = {
  count: 0,
  post: 20,
  likes: 30,
};

function updateStateReducer(state = initialState, action) {
  if (action.type === "increase/by/20") {
    return { ...state, count: state.count + action.payload };
  } else if (action.type === "decrease/by/1") {
    return { ...state, count: state.count - 1 };
  }
  return state;
}
const store = createStore(updateStateReducer);

console.log("Initial State: ", store.getState()); // current state

store.subscribe(() => console.log(store.getState())); // will be called when there is state change

store.dispatch({
  type: "increase/by/20",
  payload: 20,
});

store.dispatch({
  type: "decrease/by/1",
});
