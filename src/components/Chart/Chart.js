import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    const dataPointValues = props.dataPoints.map(
        dataPoint => dataPoint.value
    ); //returns an array of values,
    const totalMaximum = Math.max(...dataPointValues);// max requires a list, thus ...

    return <div className="chart">
        {props.dataPoints.map(dataPoint =>
            <ChartBar
                key={dataPoint.label} /*every label should be unique*/
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label}
            />)}
    </div>
};

export default Chart;