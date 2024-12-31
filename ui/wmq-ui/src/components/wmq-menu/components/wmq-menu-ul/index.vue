<script setup lang="ts">
import { TWmqMebuItem } from '../../config';

type TWmqMebuProps = {
    dataId?: string;
    menuList: TWmqMebuItem[];
};
const { menuList, dataId = '' } = defineProps<TWmqMebuProps>();
const setDataId = (item: TWmqMebuItem): string => {
    return [dataId, item.value].filter(Boolean).join('_');
};
defineOptions({
    name: 'wmq-menu-ul',
});
</script>

<template>
    <ul>
        <li v-for="item in menuList" :key="item.value">
            <p :data-id="setDataId(item)">{{ item.label }}</p>
            <template v-if="item.children && item.isOpen">
                <wmq-menu-ul
                    :menuList="item.children"
                    :dataId="setDataId(item)"
                />
            </template>
        </li>
    </ul>
</template>

<style></style>
