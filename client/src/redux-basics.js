const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0,
};

// Reducer
const rootReducer = (state = initialState, action) => state;

// Store
const store = createStore(rootReducer);

// Action

// Subscription

console.dir(rootReducer());
console.dir(initialState);
console.dir(store);
