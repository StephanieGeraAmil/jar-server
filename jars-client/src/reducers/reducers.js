import {combineReducers} from 'redux';
import movements from './MovementsReducer.js'
import jars from './JarsReducer.js'
export default combineReducers({ movements:movements,jars:jars});