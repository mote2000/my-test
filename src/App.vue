<template>
  <div id="app">
    <!-- <router-link to="/">日报</router-link>
    <router-link to="/index">业务统计</router-link>
    <router-view /> -->
    <consultdailyreport></consultdailyreport>
  </div>
</template>

<script>
import consultdailyreport from './statistics/dailyreport/consultdailyreport'

export default {
  components: {
    consultdailyreport
  }
}
</script>

<style>


</style>
