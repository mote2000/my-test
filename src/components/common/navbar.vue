<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">人才管理</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" >项目管理</el-menu-item>
      <el-menu-item index="4"><a href="" target="_blank">客户管理</a></el-menu-item>
      <el-submenu index="5">
        <template slot="title">统计报表</template>
        <el-menu-item index="5-1">日志</el-menu-item>
        <el-menu-item index="5-2">业务统计</el-menu-item>
      </el-submenu>
      <el-menu-item index="6">财务管理</el-menu-item>
      <el-menu-item index="7">我的知识库</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>




</style>