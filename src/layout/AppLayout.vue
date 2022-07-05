<template>
  <el-container>
    <el-aside>
      <AppMenu />
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import AppMenu from './components/AppMenu.vue'
</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
  .el-aside {
    width: 200px;
    background-color: #545c64;
  }
}
</style>
