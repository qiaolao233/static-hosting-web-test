<script setup lang="ts">
import { TWmqMebuItem } from '../../config';

type TWmqMebuProps = {
    isOpen?: boolean;
    dataId?: string;
    menuList: TWmqMebuItem[];
};
const { menuList, dataId = '', isOpen = false } = defineProps<TWmqMebuProps>();
const setDataId = (item: TWmqMebuItem): string => {
    return [dataId, item.value].filter(Boolean).join('_');
};
defineOptions({
    name: 'wmq-menu-ul',
});
</script>

<template>
    <div :class="['wmq-menu-ul_div', isOpen ? '' : 'wmq-menu-ul_div--hidden']">
        <ul class="wmq-menu-ul_ul">
            <li v-for="item in menuList" :key="item.value">
                <p class="wmq-menu-ul_p" :data-id="setDataId(item)">
                    {{ item.label }}
                </p>
                <template v-if="item.children">
                    <wmq-menu-ul
                        :isOpen="item.isOpen"
                        :menuList="item.children"
                        :dataId="setDataId(item)"
                    />
                </template>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped></style>
