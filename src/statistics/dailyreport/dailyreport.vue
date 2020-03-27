<template>
  <div class="dailyreport">
    <el-collapse v-model= "activeNames">
      <el-collapse-item title="做单日志" name="1">
        <ddreport></ddreport>
      </el-collapse-item>
      <el-collapse-item title="对接日志" name="2">
        <cdreport></cdreport>
      </el-collapse-item>
      <el-collapse-item title="BD日志" name="3">
        <bdreport></bdreport>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import ddreport from './ddreport'
import cdreport from './cdreport'
import bdreport from './bdreport'


export default {
  data() {
    return {
      activeNames: ['1']
    }
  },
  components: {
    ddreport,
    cdreport,
    bdreport
  }
  
}
</script>

<style lang="scss" scoped>
 
</style>
// 日志合成