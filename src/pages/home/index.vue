<script setup lang="ts"></script>

<template>
    <div class="home-w">
        <div class="home-container"></div>
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
    max-width: 1000px;
    height: 100%;
    // background-color: pink;

    h1 {
        font-family: '寒蝉团圆体 Sans', cursive;
    }
}
</style>
