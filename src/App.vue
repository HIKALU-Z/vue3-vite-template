<!--
  1.lang ="ts"
  2.defineComponents
 -->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
// import TsxExampleVue from './components/TsxExample.vue'
import { Test } from './components/Test'
</script>

<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <!-- <TsxExampleVue /> -->

  <div>
    <el-button>测试</el-button>
  </div>
  <div>
    <arco-button type="primary">
      test
    </arco-button>
  </div>

  <Test />
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
