<script setup lang="ts">
import LeftSide from './left-side/index.vue';
import RightView from './right-view/index.vue';
import { useMenuStore } from '@/models/useMenuStore';
import { useRouter } from 'vue-router';

const menuStore = useMenuStore();

const router = useRouter();
const menuClick = (ids: string[]) => {
    const menuItem = menuStore.menuClick(ids);
    if (!menuItem) return;
    if (!menuItem.children) router.push(`/${['no-server', ...ids].join('/')}`);
};
</script>

<template>
    <div class="no-server">
        <LeftSide :menu-list="menuStore.menuList" @menu-click="menuClick" />
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
