<script setup lang="ts">
import { intMyTictactoe } from '@wmq-games/my-tictactoe';
import MyTictactoe from '@wmq-games/my-tictactoe/src/utils/class/my-tictactoe';
import { $wmqMessage } from '@wmq/wmq-ui';
import { onMounted, onUnmounted, ref } from 'vue';

const canvasRef = ref<HTMLCanvasElement>();
const dialogRef = ref<HTMLDialogElement>();
let myTictactoe: MyTictactoe | undefined = void 0;
onMounted(() => {
    if (canvasRef.value && dialogRef.value) {
        myTictactoe = intMyTictactoe({
            canvasRef: canvasRef.value!,
            initPoint: {
                x: 20,
                y: 20,
            },
            renderSize: {
                width: 240,
                height: 240,
            },
            canvasSize: {
                width: 300,
                height: 300,
            },
            winFunc: () => {
                dialogRef.value?.showModal();
            },
            failFunc() {
                $wmqMessage({ content: '平局' });
                myTictactoe?.cleanBackgrond().drawBackground();
            },
        });

        myTictactoe?.cleanBackgrond().drawBackground();
    }
});
onUnmounted(() => {
    myTictactoe?.destructor();
});
const onDialogClose = () => {
    if (dialogRef.value) {
        dialogRef.value.close();
        myTictactoe?.cleanBackgrond().drawBackground();
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
