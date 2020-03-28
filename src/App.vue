<template>
  <div id="app">
    <navbar></navbar>
    <router-link to="/statistics/dailyreport/dailyreport">日报</router-link>
    <router-link to="/statistics/index">业务统计</router-link>
    <router-view />
 
  </div>
</template>

<script>
import navbar from './components/common/navbar'

export default {
  components: {
    navbar
  }
}
</script>

<style>


</style>
