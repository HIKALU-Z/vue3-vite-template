<template>
  <el-container>
    <el-aside>
      Aside
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
  .el-aside{
    background-color: #f5f5f5;
  }
}
</style>
