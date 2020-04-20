<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" active-text-color="#0000FF">
      <el-menu-item index="1" router><router-link to="/views/home/Home">首页</router-link></el-menu-item>
      <el-menu-item index="2">人才管理</el-menu-item>
      <el-menu-item index="3">项目管理</el-menu-item>
      <el-menu-item index="4">客户管理</el-menu-item>
      <el-submenu index="5">
        <template slot="title">统计报表</template>
        <el-menu-item index="5-1">日志</el-menu-item>
        <el-menu-item index="5-2">业务统计</el-menu-item>
      </el-submenu>
      <el-menu-item index="6">财务管理</el-menu-item>
      <el-menu-item index="7">我的知识库</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    homeClick() {
      this.$router.push('views/home/Home')
    }
  }
}
</script>

<style scoped>




</style>