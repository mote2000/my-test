<template>
  <div id="app">
    <!-- <router-link to="/">日报</router-link>
    <router-link to="/index">业务统计</router-link>
    <router-view /> -->
    <dailyreport></dailyreport>
  </div>
</template>

<script>
import dailyreport from './statistics/dailyreport/dailyreport'

export default {
  components: {
    dailyreport
  }
}
</script>

<style>


</style>
