<template>
    <div class="wmq-loading"></div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@keyframes spin {
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
.wmq-loading {
    width: 2em;
    height: 1.8em;
    position: relative;
    background-color: skyblue;

    &::after {
        position: absolute;
        content: ' ';
        display: block;
        width: 1.4em;
        height: 1.4em;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-top: 2px solid #fff;
        border-radius: 50%;
        animation: spin 0.5s linear infinite;
    }
}
</style>
