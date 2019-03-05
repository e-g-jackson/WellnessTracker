// import axios from 'axios';
import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

class Graph extends React.Component {

    state = { configs: this.props.data }

    componentDidMount(){
        console.log('STATE')
        console.log(this.state.data)
        console.log('PROPS')
        console.log(this.props.data)
        this.makeChart(this.state.data)
    }

    componentWillReceiveProps(newProps) {
        this.makeChart(newProps);
        // this.setState({ data: nextProps.data });  
    }

    makeChart(data){
        console.log(data)
        const chartConfigs = {
            type: 'column2d',
            width: '700',
            height: '400',
            dataFormat: 'json',
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
                "data": data
            }
        };
        this.setState({configs: chartConfigs})
        console.log(this.state.configs)
    }

    render() {
        return (
            <div className = "text-center">
                <ReactFC
                    {...this.state.configs}/>
            </div>

        );
    }
}

export default Graph;