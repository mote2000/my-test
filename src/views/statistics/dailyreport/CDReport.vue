<template>
  <div id= "cdreport" style="padding-left: 19%;padding-top: 50px">
    <el-form ref="obj" v-model="cdreport" label-width="150px" :inline="true" style="width: 1000px">
      <el-form-item label="对接公司" prop="field2" >
        <el-input  v-model= "cdreport.company" type="textarea" style="width: 250px" :rows="4" placeholder="公司名称" />
      </el-form-item>
      <el-form-item label="对接岗位" prop="field3" >
        <el-input  v-model= "cdreport.case" type="textarea" style="width: 250px" :rows="4" placeholder="岗位+地点" />
      </el-form-item>
      <el-form-item label="今日面试量" prop="field4" >
        <el-input  v-model= "cdreport.interview" type="textarea" style="width: 250px" :rows="4" placeholder= "数量" />
      </el-form-item>
      <el-form-item label="面试情况" prop="field5" >
        <el-input  v-model= "cdreport.interviewcommon" type="textarea" style="width: 250px" :rows="4" placeholder="公司+岗位+姓名，并做简要说明。" />
      </el-form-item>
      <el-form-item label="待面试人数" prop="field6" >
        <el-input  v-model= "cdreport.wfinterview" type="textarea" style="width: 250px" :rows="4" placeholder= "数量" />
      </el-form-item>
      <el-form-item label="待面试情况" prop="field7" >
        <el-input  v-model= "cdreport.wfinterviewcommand" type="textarea" style="width: 250px" :rows="4" placeholder="公司+岗位+姓名"/>
      </el-form-item>
      <el-form-item label="简历待筛选数" prop="field8" >
        <el-input  v-model= "cdreport.wfscreen" type="textarea" style="width: 250px" :rows="4" placeholder= "数量"/>
      </el-form-item>
      <el-form-item label="简历带筛选情况" prop="field9" >
        <el-input  v-model= "cdreport.wfscreencommon" type="textarea" style="width: 250px" :rows="4" placeholder="公司+岗位+姓名" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        cdreport: {
          company: '',
          case: '',
          interview: '',
          interviewcommon: '',
          wfinterview: '',
          wfinterviewcommand: '',
          wfscreen: '',
          wfscreencommon: ''
        }
      }
    }    

  }
</script>

<style lang="scss" scoped>

</style>
// 对接日志
// cdreport： coordinate daily report的简称。对接公司的名称.
