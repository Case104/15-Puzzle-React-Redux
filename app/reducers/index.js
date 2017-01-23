import { combineReducers } from 'redux';
import counter from './counterReducer';
import grid from './gridReducer';

export default combineReducers({
	grid,
	counter
});