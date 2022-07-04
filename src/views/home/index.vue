<template>
  <h1 class="title">
    {{ data }}
  </h1>
  <img
    src="@/assets/logo.png"
    alt=""
    srcset=""
  >
</template>

<script setup lang="ts">
import data from '@/api'
</script>

<style lang="scss" scoped>
.title {
  color:$primaryColor;
}
</style>
