<template>
    <div class="message" :style="styles" ref="divRef">
        <p>{{ props.content }}</p>
    </div>
</template>

<script setup lang="ts">
import { CSSProperties, onMounted, ref, watch } from 'vue';
import { wmqSleep } from '@/utils';

type TMessageMethodProps = {
    id: number;
    content: string;
    offset: number;
    closeTime?: number;
    onOpen?: () => void;
    onDestroy?: () => void;
    onClose?: () => void;
};

const props = defineProps<TMessageMethodProps>();

const divRef = ref<HTMLDivElement>();
const transitionTime = 500;
/**
 * 外部 offset 控制高度， 或者内部控制高度
 */
const styles = ref<CSSProperties>({
    top: 0,
    transition: `${transitionTime / 1000}s`,
    opacity: 1,
});
watch(
    () => props.offset,
    (val) => {
        styles.value.top = `${val}px`;
    },
    { immediate: true },
);

const closeMessage = async () => {
    if (!divRef.value) return;
    styles.value.top = 0;
    styles.value.opacity = 0;
    props.onClose?.();
    await wmqSleep(transitionTime);
    props.onDestroy?.();
};
onMounted(async () => {
    setTimeout(() => {
        closeMessage();
    }, 2000);
});
</script>

<style scoped lang="scss">
.message {
    position: fixed;
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
