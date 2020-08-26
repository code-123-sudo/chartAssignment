import * as React from "react";
import * as ReactDOM from "react-dom";
import WeatherChart from './components/weather';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Legend, Category, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
// data in original format to be passed through api
import { days, max , min , average } from './mockData/data';
//data in required format after passing through api
import { weatherData } from './mockData/data';

class App extends React.Component {
    constructor() {
        super(...arguments);
    }
    render() {
        return <div><WeatherChart /></div>
    }
};

export default App;
