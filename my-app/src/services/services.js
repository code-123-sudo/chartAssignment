export const convertToChartFormat = ( days, max, min, average ) =>  {
	var data = [];
	for ( var i = 0; i < days.length; i++ ) {
		var tempObject = {
			day : days[i],
			min : min[i],
			max : max[i],
			average: average[i] 
		}
		data.push(tempObject);
	}
	return data;
}