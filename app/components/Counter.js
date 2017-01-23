import React from 'react';
import { counterStyles } from '../utils/styles.js'

const Counter = ({ counter }) => {
	return (
		<div style={counterStyles}>
			<span>Moves: {counter}</span>
		</div>
	)
}

export default Counter;