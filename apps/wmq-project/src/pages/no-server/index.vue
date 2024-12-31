<script setup lang="ts">
import LeftSide from './left-side/index.vue';
import RightView from './right-view/index.vue';
import { useMenuStore } from '@/models/useMenuStore';

const menuStore = useMenuStore();
</script>

<template>
    <div class="no-server">
        <LeftSide
            :menu-list="menuStore.menuList"
            @menu-click="menuStore.menuClick"
        />
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
