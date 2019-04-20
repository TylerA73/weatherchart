import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import axios from 'axios';
import {createLogic, createLogicMiddleware} from 'redux-logic';
import {Provider} from 'react-redux';
import createReducer from './reducers/rootReducer.js';
import logic from './logic/index.js';
import * as serviceWorker from './serviceWorker';

let deps = { axios, React };
let logicMiddleware = createLogicMiddleware(logic, deps);
let store = createStore(createReducer(), applyMiddleware(logicMiddleware, thunk));
store.asyncReducers = {};

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
