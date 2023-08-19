<template>
  <div class="card">
    <h4>詳細空氣指標</h4>
      <div class="card-content">
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
</template>
<script setup lang="ts">

interface AirData {
  sitename: string,
  aqi: string,
  'pm2.5': string,
  o3: string,
  status: string
}

interface Props {
  data: {
    [key: string]: AirData
  }
}

const props = defineProps<Props>()

</script>
<style scoped lang="scss">
.card {
  color: black;
}
.card-content:first-child {
  margin-top: 1em;
}
.card-content * + *{
  margin-top: .6em;
}
</style>
