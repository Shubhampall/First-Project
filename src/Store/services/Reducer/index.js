import {combineReducers} from 'redux';

import addInput from './reducer';

const rootReducer = combineReducers({
  Login: addInput,
  Registration: addInput,
});
export default rootReducer;
