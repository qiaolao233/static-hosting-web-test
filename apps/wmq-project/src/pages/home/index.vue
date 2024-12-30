<script setup lang="ts">
import WmqFlatButton from '@/components/wmq-ui/wmq-button/wmq-flat-button.vue';
import { $wmqMessage } from '@/components/wmq-ui/wmq-message';
import { useRouter } from 'vue-router';

const router = useRouter();

const onNoServer = () => {
    router.push('/no-server');
};
const onUsedServer = () => {
    $wmqMessage({ content: '服务器模式未开发', closeTime: 1000 });
};
</script>

<template>
    <div class="home-w">
        <div class="home-container">
            <form class="form-one" @submit.prevent>
                <WmqFlatButton @click="onNoServer">无服务器模式</WmqFlatButton>
                <WmqFlatButton @click="onUsedServer">
                    有服务器模式
                </WmqFlatButton>
            </form>
        </div>
    </div>
</template>

<style scoped lang="scss">
.home-w {
    width: 100vw;
    height: 100vh;
    background-image: url('https://fastly.picsum.photos/id/131/4698/3166.jpg?hmac=DpRHYso0tlQQ8HzsmRHNTSWfbMaTdHq58UciPSggCY8');
    background-color: hsl(65, 60%, 81%);
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
}

.home-container {
    margin: 0 auto;
    max-width: 66em;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    .form-one {
        width: 40%;
        height: 60%;
        padding: 3em;
        background-color: pink;

        display: flex;
        flex-direction: column;
        justify-content: space-around;

        button {
            font-family: 'baotuxiaobaiti', cursive;
        }
    }
}
</style>
