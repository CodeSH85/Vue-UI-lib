<script setup>
import { ref, reactive, watch, computed } from 'vue'
import API from '../services/api'

// for option
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

    // option's data
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

// const filteredData = computed(()=>{
//   return selectSite.value
// })


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

    <div class="card">
      測站名
      <div class="card-content">
        <div class="" v-if="filterData">
          <div class="">
            AQI:{{filterData.sitename}}
          </div>
          <div class="">
            PM2.5:{{filterData[`pm2.5`]}}
          </div>
        </div>
        <div class="" v-else>
          暫無東西
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-content {
  display: flex;
}
</style>