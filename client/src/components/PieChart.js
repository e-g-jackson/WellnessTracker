import React from 'react';
import $ from 'jquery';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';
charts(FusionCharts);

class PieChart extends React.Component {
    componentDidMount(){
        this.getData();
    }

    getData(){
        $.get("/db/getFoods/" + this.props.id._id, (res) => {

            let proteinData = {
                "label": "Protein",
                "value": 0
            }
            let carbData = {
                "label": "Carb",
                "value": 0
            }
            let fruitData = {
                "label": "Fruit",
                "value": 0
            }
            let vegetableData = {
                "label": "Vegetable",
                "value": 0
            }

            console.log(res)

            const chartData = res.map((x) => {
                if(x.foodType === "Protein"){
                    console.log('new protein')
                    let newProtein = parseInt(x.portion);
                    proteinData.value += newProtein;
                } else if (x.foodType === "Carb"){
                    console.log('new carb')
                    let newCarb = parseInt(x.portion);
                    carbData.value += newCarb;
                } else if (x.foodType === "Fruit"){
                    console.log('new fruit')
                    let newFruit = parseInt(x.portion);
                    fruitData.value += newFruit;
                } else if (x.foodType === "Vegetable"){
                    console.log('new vegetable')
                    let newVegetable = parseInt(x.portion);
                    vegetableData.value += newVegetable;
                }
                let newData = [
                    proteinData,
                    carbData,
                    fruitData,
                    vegetableData
                ]
                return(newData)
            });
            
            console.log(chartData[0]);
            this.chartMaker(chartData[0]);
        })
    }

    chartMaker(data){
        console.log(data)
        const dataSource = {
            "chart": {
              "caption": "Foods",
              "plottooltext": "Shows foods consumed by portion size",
              "showlegend": "1",
              "showpercentvalues": "1",
              "legendposition": "bottom",
              "usedataplotcolorforlabels": "1",
              "theme": "fusion"
            },
            "data": data
          };
        //   this.dataSource = dataSource
        this.render(dataSource)
    }

    // dataSource = {};

    render(dataSource){
        console.log(dataSource)
        return(
        <ReactFusioncharts
            type = "pie2d"
            width = '100%'
            height = '100%'
            dataFormat = "JSON"
            dataSource = {dataSource} 
        />
        )
    }
}

export default PieChart