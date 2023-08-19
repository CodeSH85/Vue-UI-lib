<template>
  <div id='canvas'>
    <svg ref="map">
    </svg>
  </div>
</template>
<script setup lang='ts'>
import * as d3 from 'd3'
import { ref, onMounted } from 'vue'

const map = ref(null)

onMounted(() => {
  const width = 800
  const height = 600
  const svg = d3
    .select(map)
    .attr('width', width)
    .attr('height', height)

  const projection = d3
    .center([0, 0])
    .scale(150)
    .translate([width / 2, height / 2])

  const path = d3
    .geoPath()
    .projection(projection)

  d3.json('COUNTY_MOI_1090820', (error, data) => {
    svg.selectAll('path')
      .data(data.features)
      .enter()
      .append('path')
      .attr('d', path)
    if (error) {
      console.error(error)
    }
  })
})

</script>
<style></style>
