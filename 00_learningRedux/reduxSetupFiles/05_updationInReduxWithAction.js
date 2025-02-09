let reduxState = {
  count: 0,
  post: 20,
  likes: 30,
};

// update the state but based on some criteria
// Example: update count value by 20

function updateStateReducer(state, action) {
  if (action.type === "increase/by/20") {
    return { ...state, count: state.count + action.payload };
  } else if (action.type === "decrease/by/1") {
    return { ...state, count: state.count - 1 };
  }
  return state; // if nothing is updated "state" still needs to be returned
}

// The action is a "plain JS Object" that looks like below object
// The "type" property is mandatory because it helps the "state" to perform specified update
// The "type" value can be anything but convention is like below object
// The "data" is contained in the "payload" property which is optional

const reduxAction1 = {
  type: "increase/by/20",
  payload: 20,
};

const reduxAction2 = {
  type: "decrease/by/1",
};

const updatedReduxState1 = updateStateReducer(reduxState, reduxAction1);
console.log("Original Redux State Increase: ", reduxState);
console.log("Updated Redux State Increase: ", updatedReduxState1);
console.log("*******************************************************");
const updatedReduxState2 = updateStateReducer(reduxState, reduxAction2);
console.log("Original Redux State Decrease: ", reduxState);
console.log("Updated Redux State Decrease: ", updatedReduxState2);
