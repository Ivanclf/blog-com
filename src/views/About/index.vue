<template>
    <div class="about-page" :style="bottomStyle">
        <h1>关于本站</h1>
        <p>该网站是本人在该服务器下存放的各种服务器（或小型插件啥的）的导引网站，虽然现在还没有什么功能能用，网站也是随便贴了两个。但随着功能越来越多，相信这里的内容也会逐步变多的</p>
    </div>
</template>

<script setup>
import { useCardSlideIn } from '../../composables/CardSlideIn.js';
const bottomStyle = useCardSlideIn('', 2000, 40);
</script>

<style scoped>
.about-page {
    width: 60vmin;
    height: 60vmin;
    margin: calc(20vmin) auto;
    border: var(--border-color);
    background: var(--page-side-bg);
    padding: 4vh 4vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f6faff;
    border-radius: 24px;
    box-shadow: 0 -8px 32px var(--primary-dark), -8px 0 32px var(--primary-dark), 8px 0 32px var(--primary-dark);}

.about-page h1 {
    font-size: 2rem;
    margin-bottom: 16px;
}

.about-page p {
    font-size: 1.2rem;
}
</style>
