import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../services/Reducer/index';
export default function ConfigStore() {
  return createStore(rootReducer);
}
