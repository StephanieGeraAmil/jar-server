import {combineReducers} from 'redux';
import movementsReducer from './MovementsReducer.js'
import jarsReducer  from './JarsReducer.js'
import currentSelectionReducer  from './currentSelectionReducer.js'
export default combineReducers({ movements:movementsReducer ,jars:jarsReducer ,currentSelection:currentSelectionReducer});