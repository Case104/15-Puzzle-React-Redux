export default function counterReducer(state = 0, action){
	switch (action.type) {
		case 'UPDATE_COUNTER':
			return state + 1;
		case 'SET_COUNTER':
			return action.value;
		default:
			return state;
	}
}