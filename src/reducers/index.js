/**
 * Created by mponomarets on 6/25/17.
 */
import {combineReducers} from 'redux';
import MainScreenReducer from './MainScreenReducer';

export default combineReducers({
	main: MainScreenReducer
});