import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

class Graph extends React.Component {

    // state = {
    //     configs: undefined,
    //     data: undefined
    // };
    constructor(props) {
        super(props);
        this.state = {
            configs: undefined,
            data: undefined
        };
    }

    componentDidMount(){
        this.makeChart()
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps)
        if(newProps !== this.state.data){
        this.setState({ data: newProps });  
        this.makeChart();
        }
    }

    makeChart(){
        if (this.state.data === undefined){
            setTimeout(()=>{console.log('IF');console.log(this.state);this.makeChart()}, 250)
        } else {
            console.log('ELSE')
            // console.log(this.state)
            const graphData = this.state.data.data
            const chartConfigs = {
                type: 'column2d',
                width: '500',
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
                    "data": graphData
                }
            };
            this.setState({configs: chartConfigs})
        }
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