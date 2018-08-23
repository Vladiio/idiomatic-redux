import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
// import1 { throttle } from 'lodash';
import rootReducer from 'reducers';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise';
// import { loadState, saveState } from './localStorage';

// const logger = store => next => action => {
//   if (!console.group) {
//     return next;
//   }
//   console.group(action.type);
//   console.log(
//     '%c prev state',
//     'color: gray',
//     store.getState()
//   );
//   console.log('%c action ', 'color: blue', action);
//   const returnValue = next(action);
//   console.log(
//     '%c next state ',
//     'color: green',
//     store.getState()
//   );
//   console.groupEnd(action.type);
//   return returnValue;
// };

// const promiseMiddleware = store => next => action => {
//   if (typeof action.then === 'function') {
//     return action.then(next);
//   }
//   return next(action);
// };

// const wrapDispatchWithMiddlewares = (store, middlewares) =>
//   middlewares
//     .slice()
//     .reverse()
//     .forEach(middleware => {
//       store.dispatch = middleware(store)(store.dispatch);
//     });

export default () => {
  // const persistedState = loadState();
  const logger = createLogger();
  const middlewares = [promise];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }

  const composeEnhencers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    // persistedState,
    composeEnhencers(applyMiddleware(...middlewares))
  );

  // store.subscribe(
  //   throttle(() =>
  //     saveState({ todos: store.getState().todos })
  //   ),
  //   1000
  // );

};
