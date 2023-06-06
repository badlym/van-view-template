<template>
  <div> 测试页面2 </div>
  <div style="display: flex; justify-content: center">
    <van-button @click="handleBack()"> 页面回退 </van-button>
  </div>
</template>

<script setup lang="ts" name="Demo2">
  import { backPre } from '@/hooks/web/useBack';

  function handleBack() {
    backPre();
  }
</script>

<style scoped></style>
