export const newGrid = () => {
    return {
        type: 'NEW_GRID'
    }
};

export const updateGrid = (updatedGrid) => {
	return {
		type: 'UPDATE_GRID',
		updatedGrid
	}
};

export const setCounter = (value) => {
	return {
		type: 'SET_COUNTER',
		value
	}
};

export const updateCounter = () => {
	return {
		type: 'UPDATE_COUNTER'
	}
};