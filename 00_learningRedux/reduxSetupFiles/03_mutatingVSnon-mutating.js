let state1 = {
  count: 0,
};

let prevState1 = state1;

state1.count = state1.count + 1; // mutating way also updates prevState1

console.log("After Mutating Way State1: ", state1);
console.log("After Mutating Way prevState1: ", prevState1);
console.log("Is state1 === prevState1: ", state1 === prevState1);

console.log("***************************************************");

let state2 = {
  count: 0,
};

let prevState2 = state2;

state2 = {
  count: state2.count + 1,
};  // non mutating way does not update prevState2

console.log("After Non-Mutating Way State2: ", state2);
console.log("After Non-Mutating Way prevState2: ", prevState2);
console.log("Is state2 === prevState2: ", state2 === prevState2);
