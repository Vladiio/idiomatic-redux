import { createStore } from 'redux';
// import { throttle } from 'lodash';
import rootReducer from 'reducers';
// import { loadState, saveState } from './localStorage';

const addLogginToDispatch = store => {
  const rawDispatch = store.dispatch;
  if (!console.group) {
    return rawDispatch;
  }
  return action => {
    console.group(action.type);
    console.log(
      '%c prev state',
      'color: gray',
      store.getState()
    );
    console.log('%c action ', 'color: blue', action);
    const returnValue = rawDispatch(action);
    console.log(
      '%c next state ',
      'color: green',
      store.getState()
    );
    console.groupEnd(action.type);
    return returnValue;
  };
};

export default () => {
  // const persistedState = loadState();

  const store = createStore(
    rootReducer,
    // persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLogginToDispatch(store);
  }

  // store.subscribe(
  //   throttle(() =>
  //     saveState({ todos: store.getState().todos })
  //   ),
  //   1000
  // );

  return store;
};
