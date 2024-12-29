<template>
    <div class="background-image-blead">
        <h1>Ursa Major</h1>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.background-image-blead {
    background-image: url('https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0');
    background-size: cover;
    background-position: center;
    padding: 5em 10em;
    > h1 {
        font-size: 6rem;
        text-align: center;
        mix-blend-mode: hard-light;
        background-color: #c33;
        color: #808080;
        border: 0.1em solid #ccc;
        border-width: 0.1em 0;
    }
}
</style>
