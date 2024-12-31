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
    <div @click="menuClick">
        <WmqMenuUl :menuList="menuList" />
    </div>
</template>

<style></style>
