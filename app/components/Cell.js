import React, { Component } from 'react';
import { cellCoords } from '../utils/cellCoords.js'
import { hiddenCell, cellStyles } from '../utils/styles.js'

export default class Cell extends Component {

	handleSelect(props){
		const selectedLine = cellCoords(props.grid, props.id);
		const emptyLine = cellCoords(props.grid, 0);
		let updatedGrid = [];

		if (selectedLine.row === emptyLine.row){
			const placeholder = props.grid[emptyLine.row].slice();
			placeholder.splice(emptyLine.col, 1);
			placeholder.splice(selectedLine.col, 0, 0);

			updatedGrid = placeholder.map((value, index) => {
				return {
					row: emptyLine.row,
					col: index,
					value
				}
			});

		} else if (selectedLine.col === emptyLine.col){

			if (emptyLine.row > selectedLine.row){
				while (emptyLine.row > selectedLine.row){
					emptyLine.row--;
					updatedGrid.push({
						row: emptyLine.row + 1,
						col: emptyLine.col,
						value: props.grid[emptyLine.row][emptyLine.col]
					});
				}

			} else if (selectedLine.row > emptyLine.row) {
				while (selectedLine.row > emptyLine.row){
					emptyLine.row++;
					updatedGrid.push({
						row: emptyLine.row - 1,
						col: emptyLine.col,
						value: props.grid[emptyLine.row][emptyLine.col]
					});
				}
			}
			updatedGrid.push({
				row: selectedLine.row,
				col: emptyLine.col,
				value: 0
			});
		}

		if (updatedGrid.length){
			props.updateGrid(updatedGrid);
			props.updateCounter();
		}
	}

	render(){ 
		if (this.props.id === 0){
			return (
				<button
					className={'btn btn-lg btn-info'}
					style={hiddenCell}
					disabled={(this.props.id === 0)}
					onClick={this.handleSelect.bind(null, this.props)}
				>
					<span>{this.props.id}</span>
				</button>
			)
		}

		return (
			<button 
				className={'btn btn-lg btn-primary'}
				style={cellStyles}
				disabled={(this.props.id === 0)} 
				onClick={this.handleSelect.bind(null, this.props)}
			>
				<span>{this.props.id}</span>
			</button>
		)
	}
}