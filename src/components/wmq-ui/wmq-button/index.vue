<template>
    <button class="wmq-button">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
// const props = defineProps();
defineSlots<{
    default: () => any;
}>();
</script>

<style scoped lang="scss">
.wmq-button {
    padding: 0.5em 0.7em;
    border-radius: 0.3em;
    background-color: skyblue;
}
</style>
