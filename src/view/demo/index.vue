<template>
  <div>
    <van-button type="primary" @click="handleClick">主要按钮</van-button>
    {{ value }}
    <van-button @click="routerTo"> 跳转到页面 </van-button>
  </div>
</template>

<script setup lang="ts" name="demo">
  const value = ref('van-view-template');
  const router = useRouter();
  function handleClick() {
    alert('欢迎使用');
  }

  const routerTo = () => {
    router.push({
      name: 'Demo2',
    });
  };
</script>

<style scoped></style>
