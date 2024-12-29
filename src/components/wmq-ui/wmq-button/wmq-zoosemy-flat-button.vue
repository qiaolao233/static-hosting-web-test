<template>
    <button class="wmq-zoosemy-flat-button">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
defineSlots<{
    default: () => any;
}>();
</script>

<style scoped lang="scss">
.wmq-zoosemy-flat-button {
    padding: 0.8em;
    font-size: 1rem;
    color: hsl(0, 0%, 100%);
    border-radius: 0.5em;
    background-color: hsl(220, 43%, 53%);
    box-shadow: 0 0.4em hsl(214, 78%, 30%);

    &:active {
        background-color: hsl(220, 45%, 49%);
        transform: translateY(0.1em);
        box-shadow: 0 0.3em hsl(214, 78%, 30%);
    }
    &:focus {
        outline: none;
    }
}
</style>
