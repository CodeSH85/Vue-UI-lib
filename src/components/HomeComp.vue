<script setup>
import AqiBarChart from "./baseComponents/Chart.vue"
import infoCard from "./baseComponents/infoCard.vue"
import "echarts" ;
import { onMounted, ref } from "vue"
import VChart, { THEME_KEY } from 'vue-echarts';
import API from '../services/api'

let isLoading = ref(true)
let sumData = ref(
  {
    title: '平均AQI',
    data: 0
  }
)
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
    isLoading.value = false
    data.records.forEach((element) => {
      sumData.value.data = sumData.value.data + Number(element.aqi)
    })
    sumData.value.data = sumData.value.data / data.records.length
    console.log(sumData.value.data)
  }catch(err){
    // debugger
    console.error(err)
  }
}
getData()

</script>

<template>
  <div>
    <infoCard :parent-data="sumData"/>
    <button class="get-data primary-btn">get Data</button>
    <div v-if="isLoading" class="">
      資料獲取中
      <div class="loading-ani">
      </div>
    </div>
    <v-chart v-else class="chart" :option="barChart"/>
  </div>
</template>

<style lang="scss" scoped>
.chart {
  height: 100vh;
  width: 100%;
}
</style>
