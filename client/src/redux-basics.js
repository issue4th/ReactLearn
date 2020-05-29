const redux = require('redux');
const createStore = redux.createStore;

const actions = {
  INC_COUNTER: 'INC_COUNTER',
  ADD_COUNTER: 'ADD_COUNTER',
};

const initialState = {
  counter: 0,
};

// Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === actions.INC_COUNTER) {
    return { ...state, counter: state.counter + 1 };
  }

  if (action.type === actions.ADD_COUNTER) {
    return { ...state, counter: state.counter + action.value };
  }

  return state;
};

// Store
const store = createStore(rootReducer);

// Subscriptions
store.subscribe(() => console.log('Subscription:', store.getState()));

// Action
store.dispatch({ type: actions.INC_COUNTER });
store.dispatch({ type: actions.ADD_COUNTER, value: 10 });

console.log(store.getState());
