<template>
  <div id= "bdreport" style="padding-left: 19%;padding-top: 50px">
    <el-table :data="tableData" border triple height= "200" style="width: 80%">
    <el-table-column prop="serialNum" label="序号" width="50"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="company" label="公司" width="180"></el-table-column>
    <el-table-column prop="department" label="部门"></el-table-column>
    <el-table-column prop="position" label="职位"></el-table-column>
    <el-table-column prop="phone" label="联系方式"></el-table-column>
    <el-table-column prop="remarks" label="备注"></el-table-column>
  </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          serialNum: 1,
          name: '王小虎',
          company: '南京金茂',
          department: '设计部',
          position: '暖通工程师',
          phone: '18652994529',
          remarks: '经验不足，可以推荐主管'

        },
        {
          serialNum: 2,
          name: '王小虎',
          company: '南京金茂',
          department: '设计部',
          position: '暖通工程师',
          phone: '18652994529',
          remarks: '经验不足，可以推荐主管'

        },
        {
          serialNum: 3,
          name: '王小虎',
          company: '南京金茂',
          department: '设计部',
          position: '暖通工程师',
          phone: '18652994529',
          remarks: '经验不足，可以推荐主管'

        },
        {
          serialNum: 4,
          name: '王小虎',
          company: '南京金茂',
          department: '设计部',
          position: '暖通工程师',
          phone: '18652994529',
          remarks: '经验不足，可以推荐主管'

        }]
      }
    }    
  }
</script>

<style lang="scss" scoped>

</style>
// 做单日志