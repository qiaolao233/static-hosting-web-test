<script setup lang="ts">
import { TWmqMebuItem } from './config';
import WmqMenuUl from './components/wmq-menu-ul/index.vue';

type TWmqMebuProps = {
    menuList: TWmqMebuItem[];
};
const { menuList } = defineProps<TWmqMebuProps>();
const emit = defineEmits<{
    menuClick: [path: string[]];
}>();

const menuClick = (evt: MouseEvent) => {
    const target = evt.target as HTMLElement;
    if (target.tagName === 'P') {
        const ids = target.dataset.id?.split('_') ?? [];
        emit('menuClick', ids);
    }
};
</script>

<template>
    <div class="wmq-menu-w" @click="menuClick">
        <WmqMenuUl :menuList="menuList" isOpen />
    </div>
</template>

<style lang="scss" scoped>
.wmq-menu-w {
    width: 100%;
    height: 100%;
    // height: auto; 动画
    :deep(.wmq-menu-ul_div) {
        display: grid;
        grid-template-rows: 1fr;
        overflow: hidden;
        transition: 0.3s;
        &.wmq-menu-ul_div--hidden {
            grid-template-rows: 0fr;
        }
        > ul {
            min-height: 0;
        }
    }
}
</style>
