<template>
  <div id= "ddreport" style="padding-left: 19%;padding-top: 50px">
    <el-form ref="obj" v-model="ddreport" label-width="150px" :inline="true" style="width: 1000px">
      <el-form-item label="今日运作岗位" prop="field1">
        <el-input  v-model= "ddreport.case" type="textarea" style="width: 664px" :rows="4" placeholder="公司+岗位+地点" />
      </el-form-item>
      <el-form-item label="今日推荐量" prop="field2" >
        <el-input  v-model= "ddreport.recomand" type="textarea" style="width: 250px" :rows="4" placeholder="数量" />
      </el-form-item>
      <el-form-item label="推荐情况" prop="field3" >
        <el-input  v-model= "ddreport.recommandcommon" type="textarea" style="width: 250px" :rows="4" placeholder="公司+岗位+姓名" />
      </el-form-item>
      <el-form-item label="今日面试量" prop="field4" >
        <el-input  v-model= "ddreport.interview" type="textarea" style="width: 250px" :rows="4" placeholder= "数量" />
      </el-form-item>
      <el-form-item label="面试情况" prop="field5" >
        <el-input  v-model= "ddreport.interviewcommon" type="textarea" style="width: 250px" :rows="4" placeholder="公司+岗位+姓名，并做简要说明。" />
      </el-form-item>
      <el-form-item label="待面试人数" prop="field6" >
        <el-input  v-model= "ddreport.waitforinterviewnumber" type="textarea" style="width: 250px" :rows="4" placeholder= "数量" />
      </el-form-item>
      <el-form-item label="待面试情况" prop="field7" >
        <el-input  v-model= "ddreport.wfinterviewcommon" type="textarea" style="width: 250px" :rows="4" placeholder="公司+岗位+姓名"/>
      </el-form-item>
      <el-form-item label="简历待筛选数" prop="field8" >
        <el-input  v-model= "ddreport.recomand" type="textarea" style="width: 250px" :rows="4" placeholder= "数量"/>
      </el-form-item>
      <el-form-item label="简历带筛选情况" prop="field9" >
        <el-input  v-model= "ddreport.recommandcommon" type="textarea" style="width: 250px" :rows="4" placeholder="公司+岗位+姓名" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        ddreport: {
          case: '',
          recomand: '',
          recomandcommon: '',
          interview: '',
          interviewcommon: '',
          wfintervie: '',
          wfinterviewcommon: '',
          wfscreen: '',
          wfscreencommon: ''
        },
        rules: {
          case: [
            { required: true, message: '公司+岗位+地点', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          recommand: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          recomandcommon: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          interview: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          interviewcommon: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          wfintervie: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          wfinterviewcommon: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ],
          wfscreen: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ],
          wfscreencommon: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      }
    }    

  }
</script>

<style lang="scss" scoped>

</style>
// 做单日志
//  ddreport: delivery daily report的简写，即做单日志
//recomand: 当天推荐量，当天通过对接人筛选的，推荐给甲方的简历。
// recomandcommon： 当天推荐情况，推荐候选人的简单信息说明。
// interview： 当天面试量，当天甲方面试的人选，面试包括电话面试、初面、复面、终面等。
// interviewcommon： 面试情况，对面试情况进行简单说明。
// wfintervie： waiting for interview 即待面试量，是指通过甲方简历筛选候选人。
// wfinterviecommon: waiting for interview common的简写，即待面试候选人情况。
// wfscreen： waiting for scrren，即推荐给甲方，待甲方简历筛选的数量
// wfscreencommon， waiting for screen common，即推荐给甲方的人选情况。