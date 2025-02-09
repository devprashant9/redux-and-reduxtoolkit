let state = {
  timer: "stopwatch",
  count: 0,
};

console.log("Original Object: ", state);

state = {
  ...state,
  count: state.count + 1,
}; // keeps existing properties and overwrite duplicate properties with new one

console.log("Partial Overwriting Object: ", state);

state = {
  count: state.count + 1,
}; // overwrites entire existing object

console.log("Overwriting Object: ", state);
