import React, { Component } from 'react';
import { newGridStyles } from '../utils/styles.js'

export default class NewGridButton extends Component {

	onNewGrid(props){
		props.newGrid();
		props.setCounter(0);
	}

	render(){
		return(
			<button 
				className='btn btn-lg btn-success'
				onClick={this.onNewGrid.bind(null, this.props)}
				style={newGridStyles}
			>
				New Grid
			</button>
		)
	}
}