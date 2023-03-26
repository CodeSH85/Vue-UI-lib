<template>
  <div class="">
    <section v-if="!isLoading">
      <select v-model="selectedSite">
      <option value="">請選擇測站</option>
      <option v-for="siteName in sites" :key="siteName" :value="siteName">
        {{ siteName }}
      </option>
      </select>
      <CardComp :data="filteredData"></CardComp>

    </section>

    <div class="" v-else>
      資料獲取中
    </div>

    <!-- <MapComp></MapComp> -->

  </div>
</template>
<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import API from '../services/api'
import CardComp from './CardComp.vue'
// import MapComp from '../components/baseComponents/MapComp.vue'

interface AirData {
  sitename: string,
  aqi: number,
  'pm2.5': number,
  o3: number,
  status: string
}

const isLoading = ref<boolean>(true)
const selectedSite = ref<string>('')
const sites = reactive<string[]>([])

const allData = ref([])
const filteredData = ref<AirData[]>([])

const getData = async () => {
  try {
    const { data } = await API().get()
    if (data.error) throw new Error()

    allData.value = data.records.map(data => data)

    data.records.forEach((val: AirData) => {
      sites.push(val.sitename)
    })
  } catch (err) {
    console.error(err)
  } finally {
    isLoading.value = false
  }
}
getData()

watch(selectedSite, (newValue) => {
  filteredData.value = allData.value.find(data => {
    return data.sitename === newValue
  })
  console.log(filteredData.value)
})

</script>
<style lang="scss" scoped>

</style>
