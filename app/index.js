import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App.js';
import reducers from './reducers/index.js'
import { gridMaker } from './utils/gridMaker.js'

let initialState = {
	grid: gridMaker(),
	counter: 0
};

const store = createStore(reducers, initialState);

ReactDOM.render (
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app')
);