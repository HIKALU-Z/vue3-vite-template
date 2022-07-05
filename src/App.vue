<!--
  1.lang ="ts"
  2.defineComponents
 -->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
// // import TsxExampleVue from './components/TsxExample.vue'
// import { Test } from './components/Test'
import locale from 'element-plus/lib/locale/lang/zh-cn'
</script>

<template>
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />

  <div>
    <el-button>测试</el-button>
  </div>
  <div>
    <arco-button type="primary">
      test
    </arco-button>
  </div>

  <Test /> -->
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
