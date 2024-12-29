<template>
    <button class="wmq-box-shadow-buttom">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
defineSlots<{
    default: () => any;
}>();
</script>

<style scoped lang="scss">
.wmq-box-shadow-buttom {
    padding: 0.5em 0.7em;
    border-radius: 0.3em;
    font-size: 0.8rem;
    color: hsl(0, 0%, 100%);
    background-image: linear-gradient(to bottom, #57b, #148);
    box-shadow: 0.1em 0.1em 0.5em #124;

    &:active {
        box-shadow:
            inset 0 0 0.5em #124,
            inset 0 0.5em 1em rgba(0, 0, 0, 0.4);
    }
    &:focus {
        outline: none;
    }
}
</style>
