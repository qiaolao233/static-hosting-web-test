<template>
    <div class="background-image-blead"></div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.background-image-blead {
    min-height: 400px;
    background-image: url('https://cdn.pixabay.com/photo/2017/08/19/17/19/texture-2659241_1280.jpg'),
        url('https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0');
    background-size: 200px, cover;
    background-repeat: repeat, no-repeat;
    background-position: center, center;
    background-blend-mode: soft-light;
}
</style>
