<template>
  <div>
    <button @click="goVueDemo">vue-demo</button>
    <button @click="goUmijsDemo">umijs-demo</button>
    <router-view></router-view>
    <div id="sub-app">
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const goVueDemo = () => {
  router.push('vue-demo');
};
const goUmijsDemo = () => {
  router.push('umijs-demo');
};
</script>

<style scoped></style>
