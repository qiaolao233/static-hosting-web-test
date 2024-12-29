<script setup lang="ts">
import WmqMessage from '@/components/wmq-ui/wmq-message/index.vue';
import WmqButton from '@/components/wmq-ui/wmq-button/index.vue';
import WmqZoosemyButton from '@/components/wmq-ui/wmq-button/wmq-zoosemy-button.vue';
import WmqFlatButton from '@/components/wmq-ui/wmq-button/wmq-flat-button.vue';
import WmqZoosemyFlatButton from '@/components/wmq-ui/wmq-button/wmq-zoosemy-flat-button.vue';
import BackgroundImageBlead from '@/components/wmq-test/background-image-blead/index.vue';
import ScratchesImg from '@/components/wmq-test/background-image-blead/scratches-img.vue';
import { ref } from 'vue';

const messageRef = ref<InstanceType<typeof WmqMessage>>();
const openMessage = () => {
    messageRef.value?.showMessage();
};
const closeMessage = () => {
    messageRef.value?.closeMessage();
};
</script>

<template>
    <div class="home-w">
        <div class="home-container">
            <h1>wmq - 个人网站</h1>
            <WmqButton @click="openMessage">弹出消息</WmqButton>
            <WmqZoosemyButton @click="closeMessage">
                关闭消息
            </WmqZoosemyButton>
            <WmqFlatButton> 无用按钮 </WmqFlatButton>
            <WmqZoosemyFlatButton> 无用按钮 </WmqZoosemyFlatButton>
            <!-- <BackgroundImageBlead /> -->
            <ScratchesImg />
        </div>
    </div>
    <WmqMessage content="提示" ref="messageRef" />
</template>

<style scoped lang="scss">
.home-w {
    width: 100vw;
    height: 100vh;
    background-color: var(--gloabl-backgroud-color);
}

.home-container {
    margin: 0 auto;
    max-width: 1000px;
    height: 100%;
    background-color: pink;

    h1 {
        font-family: '寒蝉团圆体 Sans', cursive;
    }
}
</style>
