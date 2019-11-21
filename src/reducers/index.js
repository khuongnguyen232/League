import {combineReducers} from 'redux';
import champReducer from './champReducer';
import champInfoReducer from './champInfoReducer';
import filterListReducer from './filterListReducer';

export default combineReducers({
  champs:champReducer,
  champInfo:champInfoReducer,
  filterList:filterListReducer
});
