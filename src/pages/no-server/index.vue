<script setup lang="ts">
import LeftSide from './left-side/index.vue';
import RightView from './right-view/index.vue';
</script>

<template>
    <div class="no-server">
        <LeftSide />
        <RightView />
    </div>
</template>

<style scoped lang="scss">
.no-server {
    display: grid;
    grid-template-columns: 9em 1fr;
    grid-column-gap: 0.8em;
    height: 100vh;
}
</style>
