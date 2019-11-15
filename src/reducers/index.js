import {combineReducers} from 'redux';
import champReducer from './champReducer';
import champInfoReducer from './champInfoReducer';

export default combineReducers({
  champs:champReducer,
  champInfo:champInfoReducer
});
