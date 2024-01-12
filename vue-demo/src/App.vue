<template>
  <div>
    Vue子应用
    <button @click="goUser">用户页面</button>
    <button  @click="goMessage">消息页面</button>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const goUser = () => {
  router.push('user');
};
const goMessage = () => {
  router.push('message');
};
</script>

<style scoped>

</style>