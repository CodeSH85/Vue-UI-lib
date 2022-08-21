<script setup>
import { ref, reactive, watch } from 'vue'
import API from '../services/api'

let selectSite = ref('')
const sites = reactive([])

const allData = ref([])
let filterData = ref([])
const test = ref([
  {
    name: 'Saul'
  },
  {
    name: 'Gus'
  },
  {
    name: 'Walter'
  },
  {
    name: 'Jessie'
  }
])
const getName = ref('')


const getData = async ()=>{
  const { data } = await API().get()
  try{
    allData.value.push(data.records)
    console.log(allData.value)
    data.records.forEach((element, index) => {
      sites.push(element.sitename)
    });
  }catch(err){
    // debugger
    console.error(err)
  }
}
getData()


watch(selectSite, (newValue, oldValue)=>{
  console.log(newValue)
  // filterData.value = allData.value.filter(data => {
  //   data.sitename == newValue
  // })
  console.log(allData.value.find(data => {
    data.sitename === newValue
  }))
  // console.log(filterData.value)
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
        <div class="">
          AQI:
        </div>
        <div class="">
          PM2.5:
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