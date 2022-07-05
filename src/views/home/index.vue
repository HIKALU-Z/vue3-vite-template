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
import type { IUserInfo } from '@/api/types/common'

import { onMounted, ref } from 'vue'
const data = ref<IUserInfo['hobbies']>([])
onMounted(() => {
  getInfo().then(res => {
    data.value = []
    console.log(res.hobbies)
  }).catch(err => {
    console.log(err)
  })
})

</script>

<style lang="scss" scoped>
.title {
  color:$primaryColor;
}
</style>
