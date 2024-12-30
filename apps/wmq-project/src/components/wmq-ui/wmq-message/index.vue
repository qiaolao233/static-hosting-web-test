<template>
    <div class="message" :style="styles" ref="divRef">
        <p>{{ props.content }}</p>
    </div>
</template>

<script setup lang="ts">
import { CSSProperties, onMounted, ref } from 'vue';
import { TMessageProps } from './configs';
import { wmqSleep } from '@/utils';

const props = defineProps<TMessageProps>();

const divRef = ref<HTMLDivElement>();
const transitionTime = 500;
const styles = ref<CSSProperties>({
    top: '3em',
    display: 'block',
    transition: `${transitionTime / 1000}s`,
});
const closeMessage = async () => {
    if (!divRef.value) return;
    const outTop = divRef.value.offsetHeight;
    styles.value.top = `${-outTop}px`;
    await wmqSleep(transitionTime);
    styles.value.display = 'none';
    styles.value.top = '3em';
    props.onClose?.();
};
onMounted(async () => {
    await wmqSleep(props.closeTime ?? 1000);
    closeMessage();
});
</script>

<style scoped lang="scss">
.message {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: 0.5s;
    padding: 0.8em 1.2em;
    border-radius: 0.2em;
    border: 1px solid #265559;
    background-color: #e0f0f2;

    &--success {
        color: #2f5926;
        border-color: #2f5926;
        background-color: #cfe8c9;
    }
    &--warning {
        color: #594826;
        border-color: #594826;
        background-color: #e8dec9;
    }
    &--error {
        color: #59262f;
        border-color: #59262f;
        background-color: #e8c9cf;
    }
}
</style>
