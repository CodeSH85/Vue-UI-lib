<script setup>
import { ref, reactive, watch, computed } from 'vue'
import API from '../services/api'
import Map from '../components/baseComponents/Map.vue'


let selectSite = ref('')
const sites = reactive([])

let allData = ref([])
let filterData = ref([])

const getData = async ()=>{
  const { data } = await API().get()
  try{
    // get record's data from api
    allData.value = data.records.map(data => data)
    console.log(allData)

    // dropdown's data
    data.records.forEach(element => {
      sites.push(element.sitename)
    });

  }catch(err){
    // debugger
    console.error(err)
  }finally{

  }
}
getData()


const reloadData = () => {
  allData.value = []
  sites.value = []
  getData()
  console.log('click')
}


// return selected countries' data
watch(selectSite, (newValue, oldValue)=>{
  console.log(newValue)
  filterData.value = allData.value.find( data => {
    return data.sitename == newValue
  })
  console.log(filterData.value)
  
})

</script>

<template>
  <div class="">
    LocalComp
    <select v-model="selectSite">
      <option value="">請選擇測站</option>
      <option v-for="siteName of sites" :key="siteName" :value="siteName">
        {{ siteName }}
      </option>
    </select>

    <button class="primary-btn" @click="reloadData">重新獲取資料</button>


    <div class="card">
      詳細空氣指標
      <div class="card-content">
        <div class="" v-if="filterData">
          <div class="">
            測站名:{{filterData.sitename}}
          </div>
          <div class="">
            AQI:{{filterData.aqi}}
          </div>
          <div class="">
            PM2.5:{{filterData[`pm2.5`]}}
          </div>
          <div class="">
            o3:{{filterData.o3}}
          </div>
          <div class="">
            空氣狀態:{{filterData.status}}
          </div>
        </div>
        <div class="" v-else>
          暫無東西
        </div>
      </div>
    </div>

    <div class="taiwan-map" ref="map">
        <div id="map">
          <svg id="svg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"></svg>
        </div>
    </div>


  </div>
</template>

<style lang="scss" scoped>
.card-content {
  display: flex;
}
</style>