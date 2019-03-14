import React from 'react';
import $ from 'jquery';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';
charts(FusionCharts);

class PieChart extends React.Component {
    state = {
        data: {}
    }
    componentDidMount(){
        this.getData();
    }

    getData(){
        $.get("/db/getFoods/" + this.props.id._id, (res) => {

            let proteinData = {
                "label": "Protein",
                "value": "0"
            }
            let carbData = {
                "label": "Carb",
                "value": "0"
            }
            let fruitData = {
                "label": "Fruit",
                "value": "0"
            }
            let vegetableData = {
                "label": "Vegetable",
                "value": "0"
            }

            const chartData = res.map((x) => {
                if(x.foodType === "Protein"){
                    let newProtein = parseInt(x.portion);
                    let oldProtein = parseInt(proteinData.value);
                    let newProteinFormat = newProtein += oldProtein;
                    proteinData.value = newProteinFormat.toString();
                } else if (x.foodType === "Carb"){
                    let newCarb = parseInt(x.portion);
                    let oldCarb = parseInt(carbData.value);
                    let newCarbFormat = newCarb + oldCarb;
                    carbData.value = newCarbFormat.toString();
                } else if (x.foodType === "Fruit"){
                    let newFruit = parseInt(x.portion);
                    let oldFruit = parseInt(fruitData.value);
                    let newFruitFormat = newFruit += oldFruit;
                    fruitData.value = newFruitFormat.toString();
                } else if (x.foodType === "Vegetable"){
                    let newVegetable = parseInt(x.portion);
                    let oldVegetable = parseInt(fruitData.value);
                    let newVegetableFormat = newVegetable += oldVegetable;
                    vegetableData.value = newVegetableFormat.toString();
                }
                let newData = [
                    proteinData,
                    carbData,
                    fruitData,
                    vegetableData
                ];
                return(newData);
            });
            
            this.setState({data: chartData[0]});
        })
    }

    render(){
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
            "data": this.state.data
          };

        return(
        <ReactFusioncharts
            type = "pie2d"
            width = '500'
            height = '500'
            dataFormat = "JSON"
            dataSource = {dataSource} 
        />
        )
    }
}

export default PieChart
//////////////////////////////////////////////////////////////////////////////////////////////

// charts(FusionCharts);
// let data = () => {
//     this.
// }

// const dataSource = {
//   "chart": {
//     "caption": "Market Share of Web Servers",
//     "plottooltext": "<b>$percentValue</b> of web servers run on $label servers",
//     "showlegend": "1",
//     "showpercentvalues": "1",
//     "legendposition": "bottom",
//     "usedataplotcolorforlabels": "1",
//     "theme": "fusion"
//   },
//   "data": [data]
// };

// class MyComponent extends React.Component {
//    render() {
//       return (
//       <ReactFusioncharts
//          type = "pie2d"
//          width = '500'
//          height = '500'
//          dataFormat = "JSON"
//          dataSource = {dataSource} />
//       );
//    }
// }
// export default MyComponent