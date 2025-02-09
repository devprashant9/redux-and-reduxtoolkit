import { createStore } from "redux";

const initialState = {
  count: 0,
  post: 20,
  likes: 30,
};

const INCREASE_NUMBER = "increase/by/10"; // convention to write
const DECREASE_NUMBER = "decrease/by/5"; // convention to write
const MULTIPLY_NUMBER = "multiply/by/4"; // convention to write

function updateStateReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE_NUMBER:
      return { ...state, count: state.count + action.payload };

    case DECREASE_NUMBER:
      return { ...state, count: state.count - action.payload };

    case MULTIPLY_NUMBER:
      return { ...state, count: state.count * action.payload };

    default:
      return state;
  }
}
const store = createStore(updateStateReducer);

console.log("Initial State. Keep Eye on Count Value: ", store.getState());

store.subscribe(() => console.log(store.getState()));

// dispatch event 1
store.dispatch({
  type: INCREASE_NUMBER,
  payload: 10,
});

// dispatch event 2
store.dispatch({
  type: DECREASE_NUMBER,
  payload: 5,
});

// dispatch event 3
store.dispatch({
  type: MULTIPLY_NUMBER,
  payload: 4,
});
