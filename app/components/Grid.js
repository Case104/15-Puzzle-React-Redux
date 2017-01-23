import React from 'react';
import Cell from './Cell';

const Grid = (params) => {
	const props = params.props;

	let gridView = props.grid.map((row, rowIdx) => {
		return row.map((cell, colIdx) => {
			return (
				<Cell 
					key={cell}
					id={cell}
					row={rowIdx}
					col={colIdx}
					grid={props.grid}
					updateGrid={props.updateGrid}
					updateCounter={props.updateCounter}
				/>
			)
		})
	})

	gridView = gridView.map((row, rowIdx) => {
		return (
			<div className={'row'} key={`row${rowIdx}`}>
				{row}
			</div>
		)
	})

	return (
		<div className='grid'>
			{gridView}
		</div>
	);
}

export default Grid;