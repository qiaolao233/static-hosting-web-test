<script setup lang="ts">
const { type = 'button' } = defineProps<{
    type?: 'reset' | 'submit' | 'button' | undefined;
}>();
const emit = defineEmits<{
    /**
     * 使用具名元组语法
     */
    click: [event: MouseEvent];
    // (e: 'click', event: MouseEvent): void;
}>();
defineSlots<{
    default: () => any;
}>();
</script>

<template>
    <button
        :type="type"
        class="wmq-flat-buttom"
        @click="(event) => emit('click', event)"
    >
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
.wmq-flat-buttom {
    padding: 0.5em 0.7em;
    color: hsl(0, 0%, 100%);
    font-size: 1rem;
    background-color: hsl(220, 43%, 53%);
    box-shadow: 0 0.2em 0.2em hsla(0, 0%, 0%, 0.15);

    &:hover {
        background-color: hsl(220, 45%, 49%);
    }
    &:active {
        background-color: hsl(214, 78%, 30%);
    }
    &:focus {
        outline: none;
    }
}
</style>
