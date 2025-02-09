let state = {
    count: 0,
  };

  // Scenario 1: make count value 1
  // state.count = 1; 
  // console.log(state);
  
// Scenario 2: increase count value by 1
  // state.count = state.count + 1; 
  // console.log(state);
  
  // Scenario 2: increase count value by 1 multiple times
  function increaseCount() { 
    state.count = state.count + 1;
  }
  
  increaseCount();
  increaseCount();
  increaseCount();
  console.log(state);
  