import React,{ Component, PropTypes } from 'react'
import echarts from 'echarts'

class ReactECharts extends Component{
     componentDidMount() {
         let data = this.props.data
        //  console.log(data)
         this.showChart(data)
     }

    componentDidUpdate(){
         let data = this.props.data
　　　　　this.showChart(data)
     }

     showChart(data){
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                // data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                data:data.xAxisData
            },
            yAxis: {
                data:data.yAxisData
            },
            series: [{
                name: '销量',
                type: 'bar',
                // data: [5, 20, 36, 10, 10, 20]
                data:data.seriesData
            }]
        });

     }
    render(){
        return(
            <div id="main" style={{width: 500, height:500}}></div>
        )
    }
}

export default ReactECharts