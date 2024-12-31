<script setup lang="ts">
import { type TWmqMebuItem, WmqMenu } from '@wmq/wmq-ui';
import { ref } from 'vue';

const { menuList } = defineProps<{ menuList: TWmqMebuItem[] }>();
const emit = defineEmits<{
    menuClick: [path: string[]];
}>();
const menuClick = (ids: string[]) => {
    emit('menuClick', ids);
};
</script>

<template>
    <div class="left-side">
        <WmqMenu :menuList="menuList" @menu-click="menuClick" />
    </div>
</template>

<style scoped lang="scss">
.left-side {
    background-color: pink;
}
</style>
