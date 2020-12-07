import {createStore} from 'redux';
import rootReducer from '../services/Reducer/index';
export default function ConfigStore() {
  return createStore(rootReducer);
}
