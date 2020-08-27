import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Legend, Category, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
// data in original format to be passed through data convert service
import { days, max , min , average } from '../mockData/data';
//utitlity service to convert data to desired format
import { convertToChartFormat } from '../services/services';

class WeatherChart extends React.Component {
    constructor() {
        super(...arguments);
        this.data = convertToChartFormat(days,max,min,average);
        this.primaryxAxis = { valueType: 'Category', title: 'Days' };
        this.primaryyAxis = { minimum: 0, maximum: 80, interval: 20, title: 'Temperature' };
    }
    render() {
        return <ChartComponent id='charts' primaryXAxis={this.primaryxAxis} primaryYAxis={this.primaryyAxis} title='Temperature Chart'>
                    <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]}/>
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={this.data} xName='day' yName='max' type='Column'>
                            </SeriesDirective>
                            <SeriesDirective dataSource={this.data} xName='day' yName='min' type='Column'>
                            </SeriesDirective>
                            <SeriesDirective dataSource={this.data} xName='day' yName='average' type='Column'>
                            </SeriesDirective>
                        </SeriesCollectionDirective>
                </ChartComponent>;
    }
};

export default WeatherChart;
