import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import {Animated} from "react-animated-css";

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
    // componentDidUpdate(){
    //     this.forceUpdate();
    // }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if(nextProps !== this.state.data){
        this.setState({ data: nextProps });  
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
            <Animated animationIn="fadeIn" isVisible={true}>
            <div className = "text-center">
                <ReactFC
                    {...this.state.configs}/>
            </div>
            </Animated>
        );
    }
}

export default Graph;