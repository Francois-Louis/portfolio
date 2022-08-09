import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'src/reducers/rootReducer';
import mainMiddleware from 'src/middlewares/mainMiddleware';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    mainMiddleware,
  ),
);

const store = createStore(rootReducer, enhancers);

export default store;
