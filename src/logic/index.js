import { createLogic } from 'redux-logic';
import { getDate } from '../utils';

export const fetchForecast = createLogic({
	name: "fetchForecast",
	type: 'FETCH_FORECAST',
	cancelType: 'FETCH_FORECAST_CANCEL',
	process({ axios, getState, action }, dispatch, done){
		if(action.payload.value){
			axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${action.payload.value},ca&units=metric&cnt=7&appid=097a7b18975da0266749baee01c311ba`).then((response) => {
				if(response.data){
					let city = {
						name: response.data.city.name,
						country: response.data.city.country,
						forecast: []
					}

					if(response.data.list && Array.isArray(response.data.list)){
						city.forecast = response.data.list.map((day, i) => {
							return {
								day: getDate(i),
								high: day.temp.max,
								low: day.temp.min
							}
						})
					}

					dispatch({
						type: 'FETCH_FORECAST_SUCCESSFUL',
						payload: {
							city: city
						}
					})
					done();
				}else{
					dispatch({
						type: 'FETCH_FORECAST_FAILED',
						payload: {}
					})
					done();
				}
			})
		}
	}
});

export default [
	fetchForecast
]