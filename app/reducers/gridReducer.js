import { gridMaker } from '../utils/gridMaker.js';

export default function gridReducer(state = [], action) {
	switch (action.type) {
		case 'NEW_GRID':
			return gridMaker();		
		case 'UPDATE_GRID':
			let newGrid = state.map(row => row.slice());
			action.updatedGrid.map(update => newGrid[update.row][update.col] = update.value)
			return newGrid;
		default:
			return state;
	}
}
