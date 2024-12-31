import { ref, computed } from 'vue';

const useWmqLoading = (defaultLoading: boolean) => {
    const __count = ref(defaultLoading ? 1 : 0);
    const loading = computed(() => __count.value > 0);
    const setLoading = (newLoading: boolean) => {
        __count.value = Math.max(
            0,
            newLoading ? __count.value + 1 : __count.value - 1,
        );
    };
    return [loading, setLoading] as const;
};

export default useWmqLoading;
