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
            "caption": "Food Types",
            // "subCaption": "in lbs",
            "xAxisName": "Type of Food",
            "yAxisName": "Servings",
            "yAxisMinValue": "1",
            // "numberSuffix": "lbs",
            "theme": "fusion",
        },
        // Chart Data
        "data": [{
            "label": "Vegetable",
            "value": "4"
        }, {
            "label": "Fruit",
            "value": "3"
        }, {
            "label": "Protein",
            "value": "4"
        }, {
            "label": "Carb",
            "value": "2"
        }]
    }
};

// Step 8 - Creating the DOM element to pass the react-fusioncharts component
class FoodGraph extends React.Component {
  render() {
     return (
        <div className="container">
            <div className="row">
                 <div className="col-md-2"></div>
                 <div className="col-md-10 ">
                     <h1 className="text-left">Food Types</h1>
                     <ReactFC
                         {...chartConfigs} />
                 </div>
            </div>
        </div>
        );
    }
}

export default FoodGraph;