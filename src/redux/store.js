import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware, {END} from 'redux-saga';
import logger from 'redux-logger';
import createHistory from 'history/createMemoryHistory';
import {routerMiddleware} from 'react-router-redux';

import rootReducer from './reducers';
import rootSaga from './sagas';

const initStateKey = '__PRELOAD_STATE__';

const store = (path = '/') => {

  const sagaMiddleWare = createSagaMiddleware();
  let initialState = {};
  let middleware = [sagaMiddleWare];

  if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
  }

  if (typeof window !== 'undefined') {
    initialState = window[initStateKey];
    delete window[initStateKey];
  }

  const history = createHistory({initialEntries: [path]});
  middleware.push(routerMiddleware(history));
  const storeWithMiddleware = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware)
    )
  );
  sagaMiddleWare.run(rootSaga);
  return {
    configureStore: () => storeWithMiddleware,
    history,
    runSaga: sagaMiddleWare.run,
    close: () => storeWithMiddleware.dispatch(END),
    storeWithMiddleware,
    dispatch: storeWithMiddleware.dispatch
  };

};

export {
  store,
  initStateKey
}