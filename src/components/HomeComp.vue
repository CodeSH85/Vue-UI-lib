<script setup>
import AqiBarChart from "./baseComponents/Chart.vue"
import infoCard from "./baseComponents/infoCard.vue"
import "echarts" ;
import { onMounted, ref } from "vue"
import VChart, { THEME_KEY } from 'vue-echarts';
import API from '../servies/api'

let sum = ref(0)
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
    data.records.forEach((element) => {
      sum.value = sum.value + Number(element.aqi)
    })
    sum.value = sum.value / data.records.length
    console.log(sum.value)
  }catch(err){
    console.error(err)
  }
}
getData()

</script>

<template>
  <div>
    <infoCard :AqiSumData="sum"/>
    <v-chart class="chart" :option="barChart"/>
  </div>
</template>

<style lang="scss" scoped>
.chart {
  height: 100vh;
  width: 100%;
}

</style>
