<script setup lang="ts">
defineSlots<{
    default: () => any;
}>();
</script>

<template>
    <div class="starry-sky">
        <div class="layer1"></div>
        <div class="layer2"></div>
        <div class="layer3"></div>
        <div class="layer4"></div>
        <div class="layer5"></div>
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
@use 'sass:math';
@use 'sass:string';
.starry-sky {
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
}
@function createShadow($n) {
    $shadow: '#{math.random(100)}vw #{math.random(100)}vh #fff';
    @for $i from 2 through $n {
        $shadow: '#{$shadow}, #{math.random(100)}vw #{math.random(100)}vh #fff';
    }
    /**
   * unquote 字符串去掉引号
   */
    @return string.unquote($shadow);
}
/**
 * @for $i from 1 to 3 无法取到目标值
 * @for $i from 1 through 3 可以取到目标值
 */
$count: 1000;
$duration: 400s;
@for $i from 1 through 5 {
    $count: math.floor(math.div($count, 2));
    $duration: math.floor(math.div($duration, 2));
    $size: #{$i}px;
    /* 插件无法打印出来，只有使用sass包指令才能在终端打印 $count 的实际值 */
    @debug $count;
    .layer#{$i} {
        position: fixed;
        width: $size;
        height: $size;
        border-radius: 50%;
        left: 0;
        top: 0;
        // background: red;
        box-shadow: createShadow($count);
        animation: moveup #{$duration} linear infinite;

        &::after {
            content: '';
            position: fixed;
            left: 0;
            top: 100vh;
            width: inherit;
            height: inherit;
            border-radius: inherit;
            box-shadow: inherit;
        }
    }
}

@keyframes moveup {
    100% {
        transform: translateY(-100vh);
    }
}
</style>
