<script setup lang="ts">
import { ref } from 'vue';
import LeftSide from './left-side/index.vue';
import RightView from './right-view/index.vue';
import { TWmqMebuItem } from '@wmq/wmq-ui';

const menuList = ref<TWmqMebuItem[]>([
    {
        label: '仙尊语录',
        value: 'icon-shouye',
    },
    {
        label: '我的游戏',
        value: 'my-game',
        children: [
            {
                label: '游戏1',
                value: 'game-1',
            },
            {
                label: '游戏2',
                value: 'game-2',
            },
            {
                label: '游戏3',
                value: 'game-3',
            },
        ],
    },
]);
const menuClick = (ids: string[]) => {
    let findMenuItem: TWmqMebuItem | undefined = void 0;
    while (ids.length > 0) {
        const id = ids.shift();
        if (id) {
            findMenuItem = menuList.value.find((item) => item.value === id);
            if (!findMenuItem) break;
        }
    }

    if (findMenuItem && findMenuItem.children) {
        findMenuItem.isOpen = !findMenuItem.isOpen;
    }
};
</script>

<template>
    <div class="no-server">
        <LeftSide :menu-list="menuList" @menu-click="menuClick" />
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
