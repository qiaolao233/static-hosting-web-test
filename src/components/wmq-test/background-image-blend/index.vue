<template>
    <div class="background-image-blead"></div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.background-image-blead {
    min-height: 400px;
    background-image: url('https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0'),
        url('https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0');
    background-color: #148;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: -30vw, 30vw;
    // background-blend-mode: multiply;
    background-blend-mode: luminosity;
}
</style>
