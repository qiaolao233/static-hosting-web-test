<script setup lang="ts">
import { intMyTictactoe } from '@wmq-games/my-tictactoe';
import { onMounted, ref } from 'vue';

const canvasRef = ref<HTMLCanvasElement>();
const dialogRef = ref<HTMLDialogElement>();
onMounted(() => {
    if (canvasRef.value && dialogRef.value) {
        intMyTictactoe(canvasRef.value, dialogRef.value);
    }
});
const onDialogClose = () => {
    if (dialogRef.value) {
        dialogRef.value.close();
    }
};
</script>

<template>
    <div class="my-tictactoe">
        <canvas width="300" height="300" ref="canvasRef"></canvas>
        <dialog ref="dialogRef">
            <div>
                <p>游戏结束！</p>
                <p>
                    <button class="again" @click="onDialogClose">
                        再来一局！
                    </button>
                </p>
            </div>
        </dialog>
    </div>
</template>

<style scoped lang="scss">
.right-view {
    background-color: lime;
}
</style>
