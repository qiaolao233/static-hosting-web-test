<script setup lang="ts">
import { ref, watch } from 'vue';
const props = defineProps<{ visible: boolean }>();
watch(
    () => props.visible,
    (val) => {
        if (val) {
            openDialog();
        } else {
            closeDialog();
        }
    },
);
const slot = defineSlots<{
    title: () => any;
    default: () => any;
}>();

const dialogRef = ref<HTMLDialogElement>();

const openDialog = () => {
    dialogRef.value?.showModal();
};
const closeDialog = () => {
    dialogRef.value?.close();
};
</script>

<template>
    <dialog ref="dialogRef">
        <slot name="title"></slot>
        <slot></slot>
    </dialog>
</template>

<style scoped lang="scss"></style>
