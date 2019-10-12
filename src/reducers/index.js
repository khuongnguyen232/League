import {combineReducers} from 'redux';
import champReducer from './champReducer';

export default combineReducers({
  champs:champReducer
});
