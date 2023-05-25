<template>
  <div>
    <van-button type="primary" @click="handleClick">主要按钮</van-button>
    {{ value }}
  </div>
</template>

<script setup lang="ts" name="demo">
  const value = ref('van-view-template');

  function handleClick() {
    alert('欢迎使用');
  }
</script>

<style scoped></style>
