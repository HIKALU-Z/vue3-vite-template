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
import { getInfo } from '@/api/common'
import { onMounted } from 'vue'
onMounted(() => {
  getInfo().then(res => {
    console.log(res.logo_url)
  })
})

</script>

<style lang="scss" scoped>
.title {
  color:$primaryColor;
}
</style>
