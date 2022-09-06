<script setup>
import { ref, reactive, watch, computed, onMounted } from 'vue'
import API from '../services/api'
import Map from '../components/baseComponents/Map.vue'

let isLoading = ref(true)
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
    isLoading.value = false
  }
}
getData()

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
    <section v-if="!isLoading">
        <select v-model="selectSite">
        <option value="">請選擇測站</option>
        <option v-for="siteName of sites" :key="siteName" :value="siteName">
          {{ siteName }}
        </option>
      </select>

      <div class="card" >
        <h5>
          詳細空氣指標
        </h5>
        <div class="card-content">
          <div class="">
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
        </div>
      </div>

      <Map/>
    </section>

    <div class="" v-else>
      資料獲取中
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