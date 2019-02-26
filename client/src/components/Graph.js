// Step 1 - Including react
import React from 'react';
// import ReactDOM from 'react-dom';

// Step 2 - Including the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Step 3 - Including the fusioncharts library
import FusionCharts from 'fusioncharts';

// Step 4 - Including the chart type
import Column2D from 'fusioncharts/fusioncharts.charts';

// Step 5 - Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Step 6 - Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// Step 7 - Creating the JSON object to store the chart configurations
const chartConfigs = {
    type: 'column2d',// The chart type
    width: '700', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
        // Chart Configuration
        "chart": {
            "caption": "Weight over Time",
            "subCaption": "in lbs",
            "xAxisName": "Time",
            "yAxisName": "Weight (in lbs)",
            "yAxisMinValue": "150",
            "numberSuffix": "lbs",
            "theme": "fusion",
        },
        // Chart Data
        "data": [{
            "label": "Jan 01, 2019",
            "value": "175"
        }, {
            "label": "Jan 05, 2019",
            "value": "170"
        }, {
            "label": "Jan 10, 2019",
            "value": "165"
        }, {
            "label": "Jan 15, 2019",
            "value": "170"
        }, {
            "label": "Jan 20, 2019",
            "value": "167"
        }, {
            "label": "Jan 25, 2019",
            "value": "165"
        }, {
            "label": "Jan 30, 2019",
            "value": "174"
        }, {
            "label": "Feb 05, 2019",
            "value": "170"
        }]
    }
};

// Step 8 - Creating the DOM element to pass the react-fusioncharts component
class Graph extends React.Component {
  render() {
     return (
        <div className = "text-center">
            <ReactFC
                {...chartConfigs}/>
        </div>
     );
  }
}

export default Graph;