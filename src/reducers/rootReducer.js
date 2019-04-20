import { combineReducers } from 'redux';
import fetchForecast from './fetchForecast.js';

export default function createReducer(asyncReducers){
	return combineReducers({
		city: fetchForecast,
		...asyncReducers
	});
}