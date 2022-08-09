import { combineReducers } from 'redux';

import mainReducer from './mainReducer';

const rootReducer = combineReducers({
  Reducer: mainReducer,
});

export default rootReducer;
