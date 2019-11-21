/*eslint-disable*/
import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import registerReducer from './registerReducer';

const reducers = combineReducers({
  register: registerReducer,
  form: formReducer,
});

const store = createStore(reducers);

window.store = store;
export default store;
