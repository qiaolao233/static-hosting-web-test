<script setup lang="ts">
import { useCounterStore } from './models/useCounterStore';
import './styles/global.scss';
const counterStore = useCounterStore();
</script>

<template>
  <header>
    <div>王明乔网站</div>
    <button @click="counterStore.increment">
      添加{{ counterStore.doubleCount }}
    </button>
  </header>
</template>

<style scoped lang="scss"></style>
