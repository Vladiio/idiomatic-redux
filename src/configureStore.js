import { createStore } from 'redux';
import { throttle } from 'lodash';
import rootReducer from 'reducers';
import { loadState, saveState } from './localStorage';

export default () => {
  const persistedState = loadState();

  const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(
    throttle(() =>
      saveState({ todos: store.getState().todos })
    ),
    1000
  );

  return store;
};
