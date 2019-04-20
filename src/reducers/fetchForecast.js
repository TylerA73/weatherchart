import { getDate, getInitState } from '../utils';

const initialState = {
	name: "City",
	country: "Country",
	forecast: [{},{},{},{},{},{},{}]
};

export default function forecastReducer(state = initialState, action){
	if(action.type === "FETCH_FORECAST_SUCCESSFUL"){
		return action.payload.city;
	}else{
		return state;
	}
}