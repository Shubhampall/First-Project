import {combineReducers} from 'redux';

import {addInput, loginInput} from './reducer';

const rootReducer = combineReducers({
  Login: loginInput,
  Registration: addInput,
});
export default rootReducer;
