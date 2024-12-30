<script setup lang="ts">
import WmqMessage from '@/components/wmq-ui/wmq-message/index.vue';
import WmqButton from '@/components/wmq-ui/wmq-button/index.vue';
import WmqZoosemyButton from '@/components/wmq-ui/wmq-button/wmq-zoosemy-button.vue';
import WmqFlatButton from '@/components/wmq-ui/wmq-button/wmq-flat-button.vue';
import WmqZoosemyFlatButton from '@/components/wmq-ui/wmq-button/wmq-zoosemy-flat-button.vue';
import BackgroundImageBlead from '@/components/wmq-test/background-image-blend/index.vue';
import ScratchesImg from '@/components/wmq-test/background-image-blend/scratches-img.vue';
import MixBlendImg from '@/components/wmq-test/background-image-blend/mix-blend-img.vue';
import WmqLoading from '@/components/wmq-ui/wmq-loading/index.vue';
import WmqDialog from '@/components/wmq-ui/wmq-dialog/index.vue';
import { ref } from 'vue';
import { $wmqMessage } from '@/components/wmq-ui/wmq-message';
const openMessage = () => {
    $wmqMessage({
        content: '提示',
    });
    // messageRef.value?.showMessage();
};

const visible = ref(false);
</script>

<template>
    <div class="home-w">
        <div class="home-container">
            <h1>wmq - 个人网站</h1>
            <WmqButton @click="openMessage">弹出消息</WmqButton>
            <WmqZoosemyButton> 关闭消息 </WmqZoosemyButton>
            <WmqFlatButton @click="visible = true"> 打开弹窗 </WmqFlatButton>
            <WmqZoosemyFlatButton @click="visible = false">
                关闭弹窗
            </WmqZoosemyFlatButton>
            <!-- <BackgroundImageBlead /> -->
            <!-- <ScratchesImg /> -->
            <!-- <MixBlendImg /> -->
            <WmqLoading />
        </div>
    </div>
    <!-- <WmqMessage content="提示" ref="messageRef" /> -->
    <WmqDialog :visible="visible">
        <template #title>
            <div>标题</div>
        </template>
        <template #default>
            <div>正文</div>
        </template>
    </WmqDialog>
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
