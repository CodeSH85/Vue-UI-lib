<template>
  <!-- <div class="" v-if="barChart.xAxis[0].data.length != 0"> -->
    <v-chart class="chart" :option="barChart"/>
  <!-- </div> -->
</template>

<script setup>
import "echarts" ;
import { onMounted, ref } from "vue"
import VChart, { THEME_KEY } from 'vue-echarts';
import API from '../../services/api'

const barChart = ref({
  title: {
    text: '台灣各地空氣指標',
    subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
  },
  tooltip: {
    text: '各地空氣指標',
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data:  [],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
    }
  ],
  series: [
    {
      type: 'bar',
      showBackground: true,
      data: []
    }
  ]
});

const getData = async () => {
  try{
    let {data} = await API().get()
    for(let i = 0 ; i < data.records.length ; i++){
      barChart.value.xAxis[0].data.push(data.records[i].sitename)
      barChart.value.series[0].data.push(data.records[i].aqi)
    }
  }catch(err){
    console.error(err)
  }finally{

  }
}
getData()


</script>

<style lang="scss" scoped>
.chart {
  height: 100vh;
  width: 100%;
}
</style>