<script setup lang="ts">
import { TWmqMebuItem } from './config';
import WmqMenuUl from './components/wmq-menu-ul/index.vue';

type TWmqMebuProps = {
    list: TWmqMebuItem[];
};
const { list } = defineProps<TWmqMebuProps>();

const menuClick = (evt: MouseEvent) => {
    const target = evt.target as HTMLElement;
    if (target.tagName === 'P') {
        console.log('Clicked item:', target.dataset.id);
    }
};
</script>

<template>
    <div @click="menuClick">
        <WmqMenuUl :list="list" />
    </div>
</template>

<style></style>
