<script setup lang="ts">
import { TWmqMebuItem } from '../../config';

type TWmqMebuProps = {
    dataId?: string;
    list: TWmqMebuItem[];
};
const { list, dataId = '' } = defineProps<TWmqMebuProps>();
const setDataId = (item: TWmqMebuItem): string => {
    return [dataId, item.value].filter(Boolean).join('_');
};
defineOptions({
    name: 'wmq-menu-ul',
});
</script>

<template>
    <ul>
        <li v-for="item in list" :key="item.value">
            <p :data-id="setDataId(item)">{{ item.label }}</p>
            <template v-if="item.children">
                <wmq-menu-ul :list="item.children" :dataId="setDataId(item)" />
            </template>
        </li>
    </ul>
</template>

<style></style>
