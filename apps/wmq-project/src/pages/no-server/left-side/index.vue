<script setup lang="ts">
import { type TWmqMebuItem, WmqMenu } from '@wmq/wmq-ui';
import { ref } from 'vue';

const list = ref<TWmqMebuItem[]>([
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
</script>

<template>
    <div class="left-side">
        <WmqMenu :list="list" />
    </div>
</template>

<style scoped lang="scss">
.left-side {
    background-color: pink;
}
</style>
