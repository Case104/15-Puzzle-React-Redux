import React from 'react';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions.js';
import { connect } from 'react-redux';

import Counter from './Counter';
import Grid from './Grid'
import NewGridButton from './NewGridButton'

const mapStateToProps = (state) => {
	return {
		grid: state.grid,
		counter: state.counter
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
}

const Main = (props) => {
	return (
		<div className='container text-center'>
			<h2>15 Puzzle React/Redux</h2>
			<h3 className={'lead'}>by Jonathan Case</h3>
			<Counter counter={props.counter}/>
			<Grid props={props}/>
			<NewGridButton setCounter={props.setCounter} newGrid={props.newGrid} />
		</div>
	);
}

const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(Main)

export default App;