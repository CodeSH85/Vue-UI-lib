<template>
  <div class="root" ref="root">
    <div class="card" >
      <h4>詳細空氣指標</h4>
        <div class="card-content">
          <div class="">
            <div class="">
              測站名:{{ props.data.sitename }}
            </div>
            <div class="">
              AQI:{{ props.data.aqi }}
            </div>
            <div class="">
              PM2.5:{{ props.data['pm2.5'] }}
            </div>
            <div class="">
              o3:{{ props.data.o3  }}
            </div>
            <div class="">
              空氣狀態:{{ props.data.status }}
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script setup lang="ts">
// import { toRefs } from 'vue'

interface AirData {
  sitename: string,
  aqi: string,
  'pm2.5': string,
  o3: string,
  status: string
}

interface Props {
  data: {
    // sitename: string,
    // aqi: string,
    // 'pm2.5': string,
    // o3: string,
    // status: string
    [key: string]: AirData
  }
}

const props = defineProps<Props>()
// const { sitename: siteName } = toRefs(props.data.AirData)
// const { aqi: aqiData } = toRefs(props.data)
// const { 'pm2.5': PM25Data } = toRefs(props.data)
// const { o3: O3Data } = toRefs(props.data)
// const { status: airStatus } = toRefs(props.data)

</script>
<style scoped lang="scss">
.card {
  color: black;
}
</style>
