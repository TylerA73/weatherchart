export function getDate(days){
	let date = new Date();
	date.setDate(date.getDate() + days);
	return (date.getMonth() + 1) + '/' + date.getDate(); 
}

export default [
	getDate
]