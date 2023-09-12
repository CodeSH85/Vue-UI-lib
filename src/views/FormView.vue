<template>
  <div>
    Form
    <FormComp
      :header="columns"
      :data="data[0]"
    ></FormComp>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import FormComp from '../components/FormComp.vue'
const columns = reactive([
  {
    key: 'bok_no',
    title: 'Booking#'
  },
  {
    key: 'crt_date',
    title: 'Create Date'
  },
  {
    key: 'crt_usr',
    title: 'Create User'
  },
  {
    key: 'remark',
    title: 'Remark'
  }
])

const data = reactive([
  {
    bok_no: '123',
    crt_date: '2023/02/29',
    crt_usr: 'Saul',
    remark: 'memo'
  },
  {
    bok_no: '123',
    crt_date: '2023/02/29',
    crt_usr: 'Saul',
    remark: 'memo'
  },
  {
    bok_no: '123',
    crt_date: '2023/02/29',
    crt_usr: 'Saul',
    remark: 'memo'
  },
  {
    bok_no: '123',
    crt_date: '2023/02/29',
    crt_usr: 'Saul',
    remark: 'memo'
  },
  {
    bok_no: '123',
    crt_date: '2023/02/29',
    crt_usr: 'Saul',
    remark: 'memo'
  }
])
</script>

<style lang="scss" scoped>

</style>
